import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import singleProductslice from "./slices/singleProductSlice"


const cartStore=configureStore({
    reducer: {
        productReducer:productSlice,
        singleProductReducer:singleProductslice,
    }

})
export default cartStore