import React from "react";
import Header from "../Components/Header";

const Cart = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <div className="ms-5">
          <h1 className="text-yellow-600 font-bold text-5xl ms-5">
            Cart summary
          </h1>

          <div className="grid grid-cols-3 gap-4 m-5">
            <div className="col-span-2 border rounded shadow p-5">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-center">1</td>
                    <td>Essence masccara lash princess</td>
                    <td className="flex">
                      <img
                        width={"70px"}
                        src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                        alt=""
                        w
                      />
                    </td>
                    <td className="text-center">
                      <div className="flex">
                        <button className="font-bold">-</button>
                        <input
                          type="text"
                          style={{ width: "40px" }}
                          className="border m-2 font-bold rounded p-1"
                          value={0}
                          readOnly
                        />
                        <button className="font-bold">+</button>
                      </div>
                    </td>
                    <td>$19.99</td>
                    <td>
                      <button className="font-bold text-red-600">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="float-right">
                <button className="bg-red-600 text-white font-bold rounded p-1 me-5">
                  EmptyCart
                </button>
                <button className="bg-blue-600 text-white font-bold rounded p-1 me-5">
                  Shop More
                </button>
              </div>
            </div>
            <div className="border rounded shadow p-5">
              <h1 className="text-xl font-bold">
                Total Amount : <span className="text-red-700">$19.99</span>
              </h1>
              <hr />

              <button className="bg-green-600 rounded p-2 w-full mt-3 text-white font-bold text-xl">
                check Out{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
