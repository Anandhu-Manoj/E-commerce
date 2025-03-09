import { createSlice } from "@reduxjs/toolkit";

const whishListSlice = createSlice({
  name: "whishList",
  initialState: [],
  reducers: {
    addToWhishList: (state, dataFromView) => {
      state.push(dataFromView.payload);
    },
    removeWhishListItem: (state, dataFromView) => {

      return state.filter((val) => val.id != dataFromView.payload.id);
    },
  },
});

export const { addToWhishList, removeWhishListItem } = whishListSlice.actions;
export default whishListSlice.reducer;