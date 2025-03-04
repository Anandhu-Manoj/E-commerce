import React from "react";
import Header from "../Components/Header";

const Wishlist = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }} className="ms-3">
        <h1>MY Wish List</h1>
        <>
          <div className="grid grid-cols-4 gap-5 ">
            <div className="border shadow rounded pb-4">
              <img
                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                alt=""
              />
              <div className="text-center">
                <h3 className="font-bold text-xl mb-3">camera</h3>
              </div>

              <div className="flex justify-evenly">
                <button>
                  <i className="fa-solid fa-heart-circle-xmark text-xl text-red-600"></i>
                </button>{" "}
                <button>
                  <i className="fa-solid fa-cart-shopping text-xl text-blue-600"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Wishlist;
