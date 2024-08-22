import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
  clearCart,
} from "../../redux/CartSlice";
import Heading from "../../common/Heading";

export default function Cart() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    mobileNumber: "",
  });
  const [currentStep, setCurrentStep] = useState(1); // Step tracking
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmounts,
    deliveryCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cartProducts]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleConfirmCheckout = () => {
    const newOrder = {
      id: new Date().getTime(), // Generate a unique order ID
      name: formData.name,
      address: formData.address,
      city: formData.city,
      mobileNumber: formData.mobileNumber,
      total: totalAmounts + deliveryCharge,
      items: cartProducts,
      status: 'Pending', // Default status
      date: new Date().toLocaleDateString(), // Add order date
    };

    // Retrieve existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add the new order to the existing orders
    const updatedOrders = [...existingOrders, newOrder];

    // Save updated orders back to localStorage
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Clear the cart after checkout
    dispatch(clearCart());

    // Close the modal
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const emptyCartMsg = (
    <h4 className="container text-center p-4">Your Cart is Empty</h4>
  );

  // Navigation for multi-step checkout
  const CheckoutSteps = {
    INFO: 1,
    CONFIRM: 2,
    PAYMENT: 3,
  };

  const goToNextStep = () => {
    if (currentStep < Object.keys(CheckoutSteps).length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Heading title="Home" subtitle="Cart" />
      {cartProducts.length === 0 ? (
        emptyCartMsg
      ) : (
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <td className="align-middle">
                        <img
                          src={cartProduct.product_img}
                          alt="img"
                          style={{ width: "50px" }}
                        />{" "}
                        {cartProduct.product_name}
                      </td>
                      <td className="align-middle">{cartProduct.price}</td>
                      <td className="align-middle">
                        <div
                          className="input-group quantity mx-auto"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-primary btn-minus"
                              onClick={() =>
                                decreaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={cartProduct.quantity || 1}
                            readOnly
                          />
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-primary btn-plus"
                              onClick={() =>
                                increaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{cartProduct.totalPrice}</td>
                      <td className="align-middle">
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRemoveItem(cartProduct.id)}
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <form className="mb-30" action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    placeholder="Coupon Code"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Apply Coupon</button>
                  </div>
                </div>
              </form>
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Cart Summary</span>
              </h5>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>{totalAmounts}</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">{deliveryCharge}</h6>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Total</h5>
                    <h5>{totalAmounts + deliveryCharge}</h5>
                  </div>
                  <button
                    className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                    onClick={handleCheckout}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentStep === CheckoutSteps.INFO ? "Checkout Information" : currentStep === CheckoutSteps.CONFIRM ? "Order Confirmation" : "Payment Details"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentStep === CheckoutSteps.INFO && (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Received Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your complete address where you want to receive the parcel"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formMobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your mobile number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          )}
          {currentStep === CheckoutSteps.CONFIRM && (
            <div>
              <h5>Order Summary</h5>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>Mobile Number:</strong> {formData.mobileNumber}</p>
              <p><strong>Total Amount:</strong> {totalAmounts + deliveryCharge}</p>
            </div>
          )}
          {currentStep === CheckoutSteps.PAYMENT && (
            <div>
              <h5>Payment Details</h5>
              <p>Payment integration coming soon!</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={goToPreviousStep}>
              Back
            </Button>
          )}
          {currentStep < Object.keys(CheckoutSteps).length && (
            <Button variant="primary" onClick={goToNextStep}>
              Next
            </Button>
          )}
          {currentStep === Object.keys(CheckoutSteps).length && (
            <Button variant="primary" onClick={handleConfirmCheckout}>
              Confirm Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
