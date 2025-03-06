import React, { useEffect } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { fetchAllProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { all } from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector(
    (state) => state.productReducer
  );

  console.log(allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <>
      <Header />

      <div style={{ paddingTop: "80px" }} className="ms-5">
        {loading ? (
          <div className="flex justify-center">
            <img
              src="https://loading.io/assets/mod/spinner/double-ring/lg.gif"
              alt=""
            />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5 ">
            {allProducts?.length > 0 ? (
              allProducts.map((products) => (
                <div>
                  <div key={products.id} className="border shadow rounded pb-4">
                    <img src={products.images} alt="" />
                    <div className="text-center">
                      <h3 className="font-bold text-xl mb-3">
                        {products.title}
                      </h3>
                      <Link
                        className="bg-yellow-500 p-1  rounded"
                        to={`/${products.id}/view`}
                      >
                        view more..
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center">no products available</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
