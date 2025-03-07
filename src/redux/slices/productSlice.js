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
  initialState: {
    allProducts: [],
    dummyAllProducts: [],
    loading: false,
    error: "",
  },
  reducers: {
    searchProducts: (state, valueFromHeader) => {
      state.allProducts = state.dummyAllProducts.filter((products) =>
        products.title.toLowerCase().includes(valueFromHeader.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, ApiResult) => {
      (state.allProducts = ApiResult.payload),
        (state.dummyAllProducts = ApiResult.payload),
        (state.loading = false),
        (state.error = "");
    });
    builder.addCase(fetchAllProducts.pending, (state, ApiResult) => {
      (state.allProducts = []),
        (state.dummyAllProducts = []),
        (state.loading = true),
        (state.error = "");
    });
    builder.addCase(fetchAllProducts.rejected, (state, ApiResult) => {
      (state.allProducts = []),
        (state.dummyAllProducts = []),
        (state.loading = false),
        (state.error = "Try again");
    });
  },
});


export const { searchProducts } = productSlice.actions;
export default productSlice.reducer;
