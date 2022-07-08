import { configureStore } from "@reduxjs/toolkit";
import cartShop from "./cartShop";

const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
const setcartItems = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch {
      alert("خطایی رخ داده است");
    }
};

export const store = configureStore({
    devTools: true,
    preloadedState: loadState(),
    reducer: {
      cart: cartShop,
    },
});
  
store.subscribe(() => {
    setcartItems({
      cart: store.getState().cart,
    });
});