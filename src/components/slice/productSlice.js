import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findProduct !== -1) {
        state.cartItem[findProduct].qun +=1
      } else {
        state.cartItem = [...state.cartItem, action.payload]
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
      // console.log(findProduct);
      // state.cartItem = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
