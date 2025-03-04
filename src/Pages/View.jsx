import React from "react";
import Header from "../Components/Header";

const View = () => {
  return (
    <div>
      <Header />
      <div className="flex grid grid-cols-2" style={{ paddingTop: "80px" }}>
        <div className="">
          <img
            width={"500px"}
            src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            alt=""
          />
          <div className="flex justify-around">
            <button className="bg-green-600 border rounded p-1">
              Add to wishlist
            </button>
            <button className="bg-blue-600 border rounded p-1">
              Add to cart
            </button>
          </div>
        </div>
        <div className="">
          <div style={{marginTop:"60px"}}>
            <h1 style={{ fontSize: "50px" }}>
              Essecence mascara Lash Princess{" "}
            </h1>
            <span className="text-red-600">$10</span>
            <p>
              Brand:Essense <br />
              catogory:beauty <br />
              Discription: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Obcaecati tempore tenetur recusandae inventore mollitia
              ducimus soluta maxime quas debitis numquam tempora excepturi, eos,
              exercitationem animi asperiores odit dicta! Repellat, autem?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
