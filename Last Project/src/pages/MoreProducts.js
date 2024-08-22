import React, { useEffect, useState } from "react";

export default function MoreProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products for this page
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        {products.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="text-center py-4">
                <h6 className="text-decoration-none text-truncate">
                  {item.title}
                </h6>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>{item.price}</h5>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  {"⭐".repeat(Math.floor(item.rating.rate))}
                  <small>({item.rating.count})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
