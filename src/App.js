import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

import { AllCategories } from "./AllCategories";
import { Navbar } from "./Navbar";
import { GetAllProducts } from "./GetAllProducts";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./Cart";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SortedProduct } from "./SortedProduct";
import { useHistory, useLocation } from "react-router-dom";

export const GlobalData = createContext();

export const App = () => {
  const CartAdded = () => toast.success("Added To Cart", { autoClose: 1000 });
  // const CartRemove = () =>
  //   toast.danger("Removed from Cart", { autoClose: 1000 });
  const location = useLocation();
  // console.log(location.pathname);
  const [categoriesData, setcategoriesData] = useState([]);
  const [productsData, setproductsData] = useState([]);
  const [sortedproductsData, setsortedproductsData] = useState([]);

  const [Loader, setLoader] = useState(false);
  const [UpdateCategory, setUpdateCategory] = useState("");
  const [AddToCartData, setAddToCart] = useState([]);
  const navigate = useNavigate();
  // const [change, setAddToCart] = useState([]);

  if (AddToCartData.length <= 0 && location.pathname == "/Cart") {
    navigate(-1);
  }

  const InCategory = (data) => {
    setUpdateCategory(data);
    console.log(UpdateCategory, "check Category");
  };

  const AddTocart = (data) => {
    setAddToCart([...AddToCartData, data]);
  };

  const RemoveFromCart = (data) => {
    let getData = AddToCartData.filter((d, k) => {
      return d.id != data;
    });
    setAddToCart(getData);
  };

  // console.log(AddToCartData, "its a cart array");
  // AddToCart.map((d, k) => {
  //   return
  // });

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((res) => {
      // console.log(res.data);
      setcategoriesData(res.data);
    });

    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      // console.log(res.data);
      setproductsData(res.data);
    });

    axios
      .get(`https://fakestoreapi.com/products/category/${UpdateCategory}`)
      .then((res) => {
        console.log(res.data, "show data");
        if (UpdateCategory.length > 0) {
          setsortedproductsData(res.data);
        }
      });
  }, [UpdateCategory]);

  return (
    <GlobalData.Provider
      value={{
        categoriesData: categoriesData,
        productsData: productsData,
        InCategory: InCategory,
        Loader: Loader,
        UpdateCategory: UpdateCategory,
        AddTocart: AddTocart,
        AddToCartData: AddToCartData,
        CartAdded: CartAdded,
        RemoveFromCart: RemoveFromCart,
        sortedproductsData: sortedproductsData,
        // CartRemove: CartRemove,
      }}
    >
      <Navbar />
      {/* <Cart /> */}
      <div className="mt-2">
        <Routes>
          {UpdateCategory.length > 0 ? (
            <Route path="/" element={<SortedProduct />} />
          ) : (
            <Route path="/" element={<GetAllProducts />} />
          )}
          <Route path="/" element={<GetAllProducts />} />
          <Route path="/getAllCategories" element={<AllCategories />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <ToastContainer className="mt-5" />
      </div>
    </GlobalData.Provider>
  );
};
