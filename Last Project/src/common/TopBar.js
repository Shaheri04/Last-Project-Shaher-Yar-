import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav, topdropdown } from "../data/Data";

export default function TopBar() {
  return (
    <>
      <div className="container-fluid">
       


        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <Link to="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                TREND
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                HUB.PK
              </span>
            </Link>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </>
  );
}
