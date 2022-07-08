import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add product on cart
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (1 <= state.cartItems[itemIndex].cartQuantity) {
          state.cartItems[itemIndex].cartQuantity += 1;
        }
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },

    //low count of products
    decreaseCount(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCart;
      }
    },
  },
});

export const { addToCart, decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;
