import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Images/Cart.svg";
import { GlobalData } from "./App";

export const Navbar = () => {
  const {
    productsData,
    InCategory,
    UpdateCategory,
    Loader,
    AddTocart,
    AddToCartData,
  } = useContext(GlobalData);
  return (
    <div>
      <nav class="navbar navbar-expand-lg text-white bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">
            E-CliPCart
          </Link>
          <li class="nav-item cart_item">
            <Link to={`/${AddToCartData.length <= 0 ? "" : "Cart"}`}>
              <div
                class={`cart ${
                  AddToCartData.length <= 0 ? "Cart_opacity" : ""
                }`}
              >
                <span class="count">{AddToCartData.length}</span>
                {/* <i class="material-icons">shopping_cart</i> */}
                <i class="fa-sharp fa-solid fa-cart-shopping fa_color"></i>
              </div>
            </Link>
          </li>
          <button
            class="navbar-toggler bg-light text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item text-white">
                <Link
                  to="/"
                  class="nav-link active text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>

            <Link to={`/${AddToCartData.length <= 0 ? "" : "Cart"}`}>
              <div
                class={`cart ${
                  AddToCartData.length <= 0 ? "Cart_opacity" : ""
                }`}
              >
                <span class="count">{AddToCartData.length}</span>
                {/* <i class="material-icons">shopping_cart</i> */}
                <i class="fa-sharp fa-solid fa-cart-shopping fa_color"></i>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
