import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-yellow-500 p-6">
      <div className="flex flex-wrap border-t border-gray-700 p-3">
        <div className="w-full md:w-1/3 p-3">
          <h3 className="text-xl font-bold mb-2">
            <i className="fa-solid fa-truck-fast mr-2"></i> E-commerce
          </h3>
          <p>
            Your go-to destination for quality products at unbeatable prices. We
            offer fast and secure shipping, easy returns, and 24/7 customer
            support to ensure a seamless shopping experience. Explore our
            exclusive deals and shop with confidence!
          </p>
        </div>
        <div className="w-full md:w-1/6 p-3">
          <h3 className="text-xl font-bold mb-2">Links</h3>
          <Link to="/" className="block text-yellow-500 no-underline mb-1">
            Landing Page
          </Link>
          <Link to="/home" className="block text-yellow-500 no-underline mb-1">
            Home Page
          </Link>
          <Link to="/history" className="block text-yellow-500 no-underline">
            History Page
          </Link>
        </div>
        <div className="w-full md:w-1/4 p-3">
          <h3 className="text-xl font-bold mb-2">Guides</h3>
          <p>
            React <br />
            React Router <br />
            React Bootstrap
          </p>
        </div>
        <div className="w-full md:w-1/4 p-3">
          <h3 className="text-xl font-bold mb-2">Content</h3>
          <input
            className="rounded p-2 border border-yellow-500 text-black text-sm outline-none mb-2"
            type="email"
            placeholder="Enter your E-mail here!!!"
          />
          <button className="bg-yellow-500 text-black rounded p-2 ml-2">
            →
          </button>
          <div className="flex mt-2">
            <i className="fa-brands fa-twitter m-1"></i>
            <i className="fa-brands fa-instagram m-1 ml-3"></i>
            <i className="fa-brands fa-facebook-f m-1 ml-3"></i>
            <i className="fa-brands fa-linkedin m-1 ml-3"></i>
            <i className="fa-brands fa-github m-1 ml-3"></i>
            <i className="fa-solid fa-phone m-1 ml-3"></i>
          </div>
        </div>
        <p className="text-center mt-4 w-full text-yellow-500">
          Copyright © July 2024 Batch. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
