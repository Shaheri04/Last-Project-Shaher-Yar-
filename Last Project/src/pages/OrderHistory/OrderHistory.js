import React, { useEffect } from "react";
import Heading from "../../common/Heading";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, selectOrders } from "../../redux/OrderSlice";


export default function OrderHistory() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <Heading title="Order History" />
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-12">
            <h2>Your Orders</h2>
            {orders.length === 0 ? (
              <p className="text-center">No orders found.</p>
            ) : (
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.name}</td>
                      <td>{order.mobileNumber}</td>
                      <td>{order.address}</td>
                      <td>{order.city}</td>
                      <td>${order.total}</td>
                      <td>
                        <span
                          className={
                            order.status === "completed"
                              ? "badge bg-success"
                              : order.status === "rejected"
                              ? "badge bg-danger"
                              : "badge bg-warning text-dark"
                          }
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
