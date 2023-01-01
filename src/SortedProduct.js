import React, { useContext } from "react";
import { GlobalData } from "./App";
import { AllCategories } from "./AllCategories";

export const SortedProduct = () => {
  const {
    productsData,
    InCategory,
    UpdateCategory,
    Loader,
    AddTocart,
    AddToCartData,
    CartAdded,
    sortedproductsData,
  } = useContext(GlobalData);
  console.log(sortedproductsData, "check");
  return (
    <div>
      <div className="categories_all">
        <AllCategories />
      </div>

      <h1 className="text-center title_AllProducts">
        {UpdateCategory ? UpdateCategory : "All"} Products List
      </h1>
      <div className=" d-flex justify-content-center align-items-center flex-wrap">
        {sortedproductsData.map((data, key) => {
          return (
            <div
              className="wrapper_allProducts card mx-2 mt-2"
              style={{ width: "18rem" }}
            >
              <div className="imageWrap">
                <img
                  src={data.image}
                  height="200px"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h6 className="card-title product_title">{data.title}</h6>
                <div className="Products">{data.description}</div>
                <div className="price_category d-flex justify-content-between align-items-center flex-wrap">
                  <span class="price_tag badge text-bg-primary text-center">
                    Price: ${data.price}
                  </span>

                  <span
                    class=" cart_badge badge text-bg-success text-center mt-1"
                    onClick={() => {
                      AddTocart(data);
                      CartAdded();
                    }}
                  >
                    Add to cart{" "}
                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
