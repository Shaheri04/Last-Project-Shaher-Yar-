import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  selectProducts,
} from "../../redux/ProductsSlice";
import {
  fetchOrders,
  updateOrderStatus,
  selectOrders,
  selectTotalProfit,
  calculateTotalProfit,
} from "../../redux/OrderSlice";
import Heading from "../../common/Heading";
import "../AdminPanel/AdminPanel.css";

export default function AdminPanel() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const orders = useSelector(selectOrders);
  const profit = useSelector(selectTotalProfit);

  const [newProduct, setNewProduct] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: "",
    imageFile: null,
    imageSource: "url",
  });

  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  
  // States for today's and monthly profits
  const [todayProfit, setTodayProfit] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrders());

    // Calculate total profit for different periods
    const calculateProfits = async () => {
      try {
        await dispatch(calculateTotalProfit("daily")).unwrap();
        await dispatch(calculateTotalProfit("weekly")).unwrap();
        await dispatch(calculateTotalProfit("monthly")).unwrap();
        calculateProfitSummary(); // Calculate and set today's and monthly profits
      } catch (error) {
        console.error("Error calculating profits:", error);
      }
    };

    calculateProfits();
  }, [dispatch]);

  const calculateProfitSummary = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    const currentMonth = new Date().getMonth() + 1; // Get current month (January is 0)

    let todayProfitSum = 0;
    let monthlyProfitSum = 0;

    orders.forEach((order) => {
      const orderDate = new Date(order.date);
      const orderDateString = orderDate.toISOString().split("T")[0];
      const orderMonth = orderDate.getMonth() + 1;

      if (orderDateString === today && order.status === "completed") {
        todayProfitSum += order.total;
      }

      if (orderMonth === currentMonth && order.status === "completed") {
        monthlyProfitSum += order.total;
      }
    });

    setTodayProfit(todayProfitSum);
    setMonthlyProfit(monthlyProfitSum);
  };

  const clearProductForm = () => {
    setNewProduct({
      id: null,
      name: "",
      price: "",
      description: "",
      image: "",
      imageFile: null,
      imageSource: "url",
    });
  };

  const handleAddProduct = () => {
    const productData = {
      ...newProduct,
      image:
        newProduct.imageSource === "file"
          ? URL.createObjectURL(newProduct.imageFile)
          : newProduct.image,
    };
    if (newProduct.id) {
      dispatch(updateProduct(productData));
    } else {
      dispatch(addProduct(productData));
    }
    clearProductForm();
  };

  const handleEditProduct = (product) => {
    setNewProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      imageFile: null,
      imageSource: "url",
    });
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    clearProductForm();
  };

  const handleUpdateOrderStatus = () => {
    if (selectedOrderId && orderStatus) {
      dispatch(updateOrderStatus({ id: selectedOrderId, status: orderStatus }))
        .unwrap()
        .then(() => {
          // Recalculate profits after updating order status
          dispatch(calculateTotalProfit("daily")).unwrap();
          dispatch(calculateTotalProfit("weekly")).unwrap();
          dispatch(calculateTotalProfit("monthly")).unwrap();
          calculateProfitSummary(); // Recalculate profits after status update
          // Clear selected order and status after updating
          setSelectedOrderId("");
          setOrderStatus("");
        })
        .catch((error) => console.error("Error updating order status:", error));
    }
  };

  const handleImageChange = (e) => {
    setNewProduct({
      ...newProduct,
      imageFile: e.target.files[0],
      imageSource: "file",
    });
  };

  return (
    <>
      <Heading title="Admin Panel" />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-12">
            <h2>Manage Products</h2>
            <div className="product-form">
              <h3>{newProduct.id ? "Edit Product" : "Add New Product"}</h3>
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <textarea
                placeholder="Description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
              <div className="image-upload">
                <label>
                  <input
                    type="radio"
                    name="imageSource"
                    value="url"
                    checked={newProduct.imageSource === "url"}
                    onChange={() =>
                      setNewProduct({ ...newProduct, imageSource: "url" })
                    }
                  />
                  Image URL
                </label>
                <label>
                  <input
                    type="radio"
                    name="imageSource"
                    value="file"
                    checked={newProduct.imageSource === "file"}
                    onChange={() =>
                      setNewProduct({ ...newProduct, imageSource: "file" })
                    }
                  />
                  Upload from Device
                </label>
                {newProduct.imageSource === "url" ? (
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                  />
                ) : (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                )}
              </div>
              <button onClick={handleAddProduct}>
                {newProduct.id ? "Update Product" : "Add Product"}
              </button>
              {newProduct.id && (
                <button onClick={() => clearProductForm()}>Cancel</button>
              )}
            </div>
            <ul className="product-list">
              {products.map((product) => (
                <li key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                  <button onClick={() => handleEditProduct(product)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            <h2>Manage Orders</h2>
            <div className="order-management">
              <select
                value={selectedOrderId}
                onChange={(e) => setSelectedOrderId(e.target.value)}
              >
                <option value="">Select Order</option>
                {orders.length === 0 ? (
                  <option value="">No Orders Available</option>
                ) : (
                  orders.map((order) => (
                    <option key={order.id} value={order.id}>
                      Order ID: {order.id} - Status: {order.status}
                    </option>
                  ))
                )}
              </select>
              <select
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>
              <button onClick={handleUpdateOrderStatus}>Update Status</button>
            </div>
            
            {/* Profit Summary Section */}
            <h2>Profit Summary</h2>
            <div className="profit-summary">
              <p>Today's Profit: ${todayProfit}</p>
              <p>Monthly Profit: ${monthlyProfit}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
