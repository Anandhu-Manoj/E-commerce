import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProductsById = createAsyncThunk(
    "product/fetchAllProductsById",
    async (id) => {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(data)
      return data;
    },
    {}
  );

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState: {
      Product: [],
  
      loading: false,
      error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchAllProductsById.fulfilled, (state, ApiResult) => {
        (state.Product = ApiResult.payload),
          (state.loading = false),
          (state.error = "");
      });
      builder.addCase(fetchAllProductsById.pending, (state, ApiResult) => {
        (state.Product = []), (state.loading = true), (state.error = "");
      });
      builder.addCase(fetchAllProductsById.rejected, (state, ApiResult) => {
        (state.Product = []),
        
          (state.loading = false),
          (state.error = "Try again");
      });
    },
  });

  export default singleProductSlice.reducer