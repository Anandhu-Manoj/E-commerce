import React from "react";
import { Link } from "react-router-dom";
import { searchProducts } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";


const Header = ({fromHomeComponent}) => {
  const dispatchSearch=useDispatch();
  return (
    <nav className="flex bg-yellow-600 fixed p-5 w-full justify-between ">
      <Link to={"/"} className="text-white font-bold">
        <i className="fa-solid fa-truck-fast "></i> Daily cart
      </Link>

      <ul className="flex gap-5">
        {fromHomeComponent?(<li className="bg-white">
          <input
          onChange={(e)=>{
            dispatchSearch(searchProducts(e.target.value.toLowerCase()))
          }}
            type="text"
            style={{ width: "300px" }}
            className="rounded p-1 outline-0 "
            name=""
            id=""
            placeholder="search products here..."
          />
        </li>):("")}
        <Link to={"/wishlist"}>
          <li>
            <i className="fa-solid fa-heart text-red-600"></i> Wish list{" "}
            <span className="bg-black text-white p-1">0</span>
          </li>
        </Link>

        <Link to={"/cart"}>
          <li>
            <i className="fa-solid fa-cart-shopping text-black-600"></i> Cart{" "}
            <span className="bg-black text-white p-1">0</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
