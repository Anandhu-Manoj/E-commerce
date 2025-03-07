import React, { useEffect } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { fetchAllProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Header fromHomeComponent={true} />

      <div className="pt-32 px-5"> {}
        {loading ? (
          <div className="flex justify-center">
            <img
              src="https://loading.io/assets/mod/spinner/double-ring/lg.gif"
              alt="Loading"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {allProducts?.length > 0 ? (
              allProducts.map((product) => (
                <div
                  key={product.id}
                  className="shadow-lg rounded-lg overflow-hidden   duration-300 "
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-xl mb-3">{product.title}</h3>
                    <Link
                      className="bg-yellow-500 p-2 rounded text-white"
                      to={`/${product.id}/view`}
                    >
                      View more..
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center">No products available</div>
            )}
          </div>
        )}
      </div>
      
    </>
  );
};

export default Home;