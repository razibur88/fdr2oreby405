import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findProduct !== 1) {
        console.log("ami ager ta");
      } else {
        console.log("ami new");
      }
      // console.log(findProduct);
      // state.cartItem = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
