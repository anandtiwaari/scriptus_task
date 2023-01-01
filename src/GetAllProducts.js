import React, { useContext } from "react";
import { AllCategories } from "./AllCategories";
import { GlobalData } from "./App";
import { Circles } from "react-loader-spinner";

export const GetAllProducts = () => {
  const {
    productsData,
    InCategory,
    UpdateCategory,
    Loader,
    AddTocart,
    AddToCartData,
    CartAdded,
  } = useContext(GlobalData);
  // console.log(AddToCartData, "get all produ");
  return (
    <div>
      <div className="categories_all">
        <AllCategories />
      </div>

      <h1 className="text-center title_AllProducts">
        {UpdateCategory ? UpdateCategory : "All"} Products List
      </h1>
      {/* {Loader ? (
        <div className="loader d-flex justify-content-center align-items-center">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        ""
      )} */}

      <div className=" d-flex justify-content-center align-items-center flex-wrap">
        {productsData.map((data, key) => {
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
                  {/* <span
                    class="badge badge_category text-bg-success text-center"
                    onClick={() => {
                      InCategory(data.category);
                    }}
                  >
                    Category:{data.category}
                  </span> */}
                  <span
                    class=" cart_badge badge text-bg-success text-center mt-1"
                    // onClick={() => {
                    //   InCategory(data.category);
                    // }}
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
