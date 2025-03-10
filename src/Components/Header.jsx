import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProducts } from "../redux/slices/productSlice";

const Header = ({ fromHomeComponent }) => {
  const wishlistState = useSelector((state) => state.whishListReducer);
  const cartData = useSelector((state) => state.cartReducer);
  const dispatchSearch = useDispatch();

  return (
    <nav className="flex bg-black w-full fixed p-3 justify-between items-center shadow-lg">
      <Link to={"/"} className="text-yellow-500 font-bold text-xl">
        <i className="fa-solid fa-truck-fast mr-2"></i> Daily Cart
      </Link>
      <ul className="flex gap-5 items-center">
        {fromHomeComponent && (
          <li className="bg-white rounded-lg overflow-hidden">
            <input
              onChange={(e) => {
                dispatchSearch(searchProducts(e.target.value.toLowerCase()));
              }}
              type="text"
              className="p-2 w-72"
              placeholder="Search Products Here..."
            />
          </li>
        )}
        <li>
          <Link to={"/wishlist"} className="flex items-center text-yellow-500">
            <i className="fa-solid fa-heart mr-1"></i> Wishlist{" "}
            <span className="bg-yellow-500 text-black p-1 ml-1 rounded">
              {wishlistState?.length}
            </span>
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="flex items-center text-yellow-500">
            <i className="fa-solid fa-cart-shopping mr-1"></i> Cart{" "}
            <span className="bg-yellow-500 text-black p-1 ml-1 rounded">
              {cartData?.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;