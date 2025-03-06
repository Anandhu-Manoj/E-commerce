import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    let { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data);
    return data.products;
  },
  {}
);
const productSlice = createSlice({
  name: "products",
  initialState: { allProducts: [], loading: false, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, ApiResult) => {
      (state.allProducts = ApiResult.payload),
        (state.loading = false),
        (state.error = "");
    });
    builder.addCase(fetchAllProducts.pending,(state,ApiResult)=>{
        state.allProducts=[],
        state.loading=true,
        state.error=""
    })
    builder.addCase(fetchAllProducts.rejected,(state,ApiResult)=>{
        state.allProducts=[],
        state.loading=false,
        state.error="Try again"
    });
  },
});


export default productSlice.reducer