import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { category } from "../data/Data";

export default function Category() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (catId) => {
    setHover(catId);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleCategoryClick = (catId) => {
    console.log(`Category ID clicked: ${catId}`); // Debugging: check ID
    const foundCategory = category.find((cat) => cat.id === catId);
    if (foundCategory) {
      navigate(`/category/${catId}`);
    } else {
      navigate('/NotFoundPage');
    }
  };

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <button
        onClick={() => setShow(!show)}
        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
        style={{ height: "65px", padding: "0 30px" }}
      >
        <h6 className="text-dark m-0">
          <i className="fa fa-bars mr-2"></i>Categories
        </h6>
        <i className="fa fa-angle-down text-dark"></i>
      </button>
      <nav
        className={`position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light ${show ? "show" : "collapse"}`}
        id="navbar-vertical"
        style={{ width: "calc(100% - 30px)", zIndex: "999" }}
      >
        <div className="navbar-nav w-100">
          {category.slice(0, 10).map((cat) => (
            <div key={cat.id}>
              {cat.subCat ? (
                <div className="nav-item dropdown dropright">
                  <a
                    className="nav-link dropdown-toggle"
                    onMouseEnter={() => handleMouseEnter(cat.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleCategoryClick(cat.id)}
                    role="button"
                  >
                    {cat.category_name}
                    <i className="fa fa-angle-right float-right mt-1"></i>
                  </a>
                  <div
                    className={`dropdown-menu position-absolute rounded-0 border-0 m-0 ${hover === cat.id ? "show" : ""}`}
                  >
                    {cat.subCat.map((subItem) => (
                      <Link
                        key={subItem.id}
                        className="dropdown-item"
                        to={`/category/${subItem.id}`} // Correct URL for subcategories
                      >
                        {subItem.category_name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  className="nav-item nav-link"
                  to={`/category/${cat.id}`} // Correct URL for categories
                  onClick={() => handleCategoryClick(cat.id)} // Optional: Handle additional logic if needed
                >
                  {cat.category_name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
