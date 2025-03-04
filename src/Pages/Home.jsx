import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div style={{ paddingTop: "80px" }} className="ms-5">
        <>
          <div className="grid grid-cols-4 gap-5 ">
            <div className="border shadow rounded pb-4">
              <img
                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                alt=""
              />
              <div className="text-center">
                <h3 className="font-bold text-xl mb-3">camera</h3>
                <Link className="bg-yellow-500 p-1  rounded" to={'id/view'}>view more..</Link>
              </div>
            </div>
          </div>
        </>
      </div>
     
    </>
  );
};

export default Home;
