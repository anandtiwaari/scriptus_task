import React, { useContext } from "react";
import { GlobalData } from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cart = () => {
  const {
    productsData,
    InCategory,
    UpdateCategory,
    Loader,
    AddTocart,
    AddToCartData,
    RemoveFromCart,
    CartAdded,
    // CartRemove,
  } = useContext(GlobalData);
  console.log(AddToCartData.length, "get all produ");
  const CartRemove = () =>
    toast.success("Removed from Cart", { autoClose: 1000 });

  return (
    <div>
      <h1 className="text-center cart_title"> Your Cart</h1>
      <div className="cartWrapper d-flex justify-content-center align-items-center flex-wrap">
        {AddToCartData.map((data, key) => {
          return (
            <div className="card mx-2 mt-2" style={{ width: "18rem" }}>
              <div className="imageWrap">
                <img
                  src={data.image}
                  height="200px"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h6 className="card-title">{data.title}</h6>
                <div className="Products">{data.description}</div>
                <div className="price_category d-flex justify-content-between align-items-center mt-2  flex-wrap">
                  <span class="badge text-bg-primary text-center">
                    Price: ${data.price}
                  </span>
                  <span class="mt-2 badge text-bg-success text-center">
                    Category:{data.category}
                  </span>
                  <span
                    class="badge badge_remove text-bg-danger text-center mt-1"
                    onClick={() => {
                      RemoveFromCart(data.id);
                      CartRemove();
                    }}
                  >
                    <i class="fa-solid fa-trash"></i> Remove
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};
