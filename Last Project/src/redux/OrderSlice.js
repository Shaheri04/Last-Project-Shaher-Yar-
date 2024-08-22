import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch orders from local storage
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    return orders;
  }
);

// Update order status and save to local storage
export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ id, status }) => {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders = orders.map((order) =>
      order.id === id ? { ...order, status } : order
    );
    localStorage.setItem("orders", JSON.stringify(orders));
    return orders; // Return the updated orders to update the state
  }
);

// Calculate total profit based on the period (daily, weekly, monthly)
export const calculateTotalProfit = createAsyncThunk(
  "orders/calculateTotalProfit",
  async (period, { rejectWithValue }) => {
    try {
      let orders = JSON.parse(localStorage.getItem("orders")) || [];

      const today = new Date();
      const todayString = today.toISOString().split("T")[0];
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      const calculateProfit = () => {
        return orders
          .filter((order) => {
            const orderDate = new Date(order.date);
            if (isNaN(orderDate)) {
              console.error(`Invalid date for order: ${JSON.stringify(order)}`);
              return false;
            }

            if (order.status !== "completed") return false;

            switch (period) {
              case "daily":
                return orderDate.toISOString().split("T")[0] === todayString;
              case "weekly":
                return orderDate >= startOfWeek;
              case "monthly":
                return orderDate >= startOfMonth;
              default:
                return false;
            }
          })
          .reduce((total, order) => total + order.total, 0);
      };

      return { period, profit: calculateProfit() };
    } catch (error) {
      console.error('Error calculating total profit:', error);
      return rejectWithValue("Failed to calculate total profit.");
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    totalProfit: { daily: 0, weekly: 0, monthly: 0 },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(calculateTotalProfit.fulfilled, (state, action) => {
        state.totalProfit[action.payload.period] = action.payload.profit;
      })
      .addCase(calculateTotalProfit.rejected, (state, action) => {
        // Handle the error case
        console.error(action.payload || "Failed to calculate total profit.");
      });
  },
});

export const selectOrders = (state) => state.orders.orders;
export const selectTotalProfit = (state) => state.orders.totalProfit;

export default orderSlice.reducer;
