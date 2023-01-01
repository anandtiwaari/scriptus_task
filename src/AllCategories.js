import React, { useContext } from "react";
import { GlobalData } from "./App";
import electronics from "./Images/Electronics.jpg";
import jewelery from "./Images/jewelery.jpg";
import MenClothing from "./Images/MenClothing.jpg";
import womensClothing from "./Images/womensClothing.jpg";
export const AllCategories = () => {
  const { categoriesData, InCategory } = useContext(GlobalData);
  //   categoriesData.map((d, k) => {
  //     return console.log(d);
  //   });

  const imageApply = (d) => {
    if (d == "jewelery") {
      return jewelery;
    } else if (d == "electronics") {
      return electronics;
    } else if (d == "men's clothing") {
      return MenClothing;
    } else if (d == "women's clothing") {
      return womensClothing;
    }
  };
  console.log(categoriesData);
  return (
    <div>
      <div className=" d-flex justify-content-evenly align-items-center mt-5  flex-wrap ">
        {categoriesData.map((d, k) => {
          return (
            <div
              className="categoriesWrapper card mx-2 mt-2"
              onClick={() => {
                InCategory(d);
              }}
              style={{ width: "18rem" }}
            >
              <div className="imageWrap">
                <img
                  src={imageApply(d)}
                  height="200px"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <button className="card-title categories_title">{d}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
