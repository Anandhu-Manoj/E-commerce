import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6">
      <div className="flex flex-wrap border p-3">
        <div className="w-full md:w-1/3 p-3">
          <h3 className="text-xl font-bold mb-2">
            <i style={{ gap: "5px" }} className="fa-solid fa-truck-fast me-2"></i>
            E-commerce
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque
            eveniet error, voluptas repellendus sequi pariatur, eaque deserunt
          </p>
        </div>
        <div className="w-full md:w-1/6 p-3">
          <h3 className="text-xl font-bold mb-2">Links</h3>
          <Link to="/" className="block text-white no-underline mb-1">
            Landing Page
          </Link>
          <Link to="/home" className="block text-white no-underline mb-1">
            Home Page
          </Link>
          <Link to="/history" className="block text-white no-underline">
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
            className="rounded p-2 border border-white text-white text-sm outline-none mb-2"
            type="email"
            placeholder="Enter your E-mail here!!!"
          />
          <button className="bg-blue-500 text-white rounded p-2 ml-2">→</button>
          <div className="flex mt-2">
            <i className="fa-brands fa-twitter m-1"></i>
            <i className="fa-brands fa-instagram m-1 ml-3"></i>
            <i className="fa-brands fa-facebook-f m-1 ml-3"></i>
            <i className="fa-brands fa-linkedin m-1 ml-3"></i>
            <i className="fa-brands fa-github m-1 ml-3"></i>
            <i className="fa-solid fa-phone m-1 ml-3"></i>
          </div>
        </div>
        <p className="text-center mt-4 w-full">
          Copyright © July 2024 Batch. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
