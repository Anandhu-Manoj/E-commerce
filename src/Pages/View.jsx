import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsById } from "../redux/slices/singleProductSlice";

const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Product, loading, error } = useSelector(
    (state) => state.singleProductReducer
  );

  useEffect(() => {
    dispatch(fetchAllProductsById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://loading.io/assets/mod/spinner/double-ring/lg.gif"
          alt="Loading"
        />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  if (!Product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto pt-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={Product.thumbnail}
              alt={Product.title}
              className="shadow-lg rounded-lg w-[60%] mt-10 h-auto"
            />
            <div className="flex justify-around mt-4 w-full">
              <button className="bg-green-600 border rounded p-2 text-white">
                Add to wishlist
              </button>
              <button className="bg-blue-600 border rounded p-2 text-white">
                Add to cart
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{Product.title}</h1>
            <span className="text-red-600 text-2xl mb-4">${Product.price}</span>
            <p className="mb-4">
              <strong>Brand:</strong> {Product.brand} <br />
              <strong>Category:</strong> {Product.category} <br />
              <strong>Description:</strong> {Product.description}
            </p>
            <h2 className="mt-6 text-lg font-semibold text-gray-800">
              Client Reviews
            </h2>

            {Product.reviews?.map((obj) => (
              <div
                key={Product.id}
                className="border rounded-lg p-4 shadow-md mt-2 bg-gray-100 w-[90%]"
              >
                <h3 className="font-semibold text-gray-800">
                  {obj.reviewerName}
                </h3>
                <p className="text-gray-600 text-sm italic">{obj.comment}</p>
                <p className="text-yellow-600 font-semibold mt-1">
                  ⭐ Rating: {obj.rating}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
