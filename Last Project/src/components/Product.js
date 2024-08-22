import React, { useState, useEffect } from "react";
import { products as staticProducts } from "../data/Data";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getCartTotal } from "../redux/CartSlice";

export default function Product() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (showMore) {
      const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setFetchedProducts(data);
      };

      fetchProducts();
    }
  }, [showMore]);

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  const allProducts = [...staticProducts, ...(showMore ? fetchedProducts : [])];

  const buttonStyle = {
    backgroundColor: isHovered ? '#fff' : '#ffbb00', // Gold color when not hovered, white when hovered
    borderColor: isHovered ? '#ffbb00' : '#ffbb00', // Gold color for border
    color: isHovered ? '#000' : '#fff', // Black text color when hovered, white otherwise
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    transition: 'all 0.3s ease', // Smooth transition for hover effect
    border: '1px solid', // Border style
    cursor: 'pointer' // Change cursor on hover
  };

  return (
    <>
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          {allProducts.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <div className="product-item bg-light mb-4" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={item.product_img || item.image}
                    alt={item.product_name || item.title}
                    style={{
                      width: '100%',
                      height: '200px', // Set a consistent height
                      objectFit: 'cover', // Ensure image covers the container
                    }}
                  />
                  <div className="product-action">
                    <Link
                      className="btn btn-outline-dark btn-square"
                      onClick={() => handleAddToCart(item)}
                      style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '10' }}
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" style={{ position: 'absolute', top: '10px', right: '50px', zIndex: '10' }}>
                      <i className="far fa-heart"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" style={{ position: 'absolute', top: '10px', right: '90px', zIndex: '10' }}>
                      <i className="fa fa-sync-alt"></i>
                    </Link>
                    <Link className="btn btn-outline-dark btn-square" style={{ position: 'absolute', top: '10px', right: '130px', zIndex: '10' }}>
                      <i className="fa fa-search"></i>
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Link className="h6 text-decoration-none text-truncate" style={{ color: '#333' }}>
                    {item.product_name || item.title}
                  </Link>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>{item.price}</h5>
                    <h6 className="text-muted ml-2">
                      <del>{item.price}</del>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    {item.stars || "⭐⭐⭐⭐"}
                    <small>({item.ratingCount || item.rating?.count || 100})</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Discover More"}
          </button>
        </div>
      </div>
    </>
  );
}
