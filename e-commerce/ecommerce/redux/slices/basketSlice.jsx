import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStorage(),
  totalAmount: 0,
};

const basketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id == action.payload.id);
      if (findProduct) {
        const extractedProducts = state.products.filter(
          (product) => product.id != action.payload.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
        basketToStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        basketToStorage(state.products);
      }
    },
    removeFromBasket: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      basketToStorage(state.products);
    },
    calculateTotalAmount: (state) => {
      state.totalAmount = 0;
      state.products &&
        state.products.map((product) => {
          state.totalAmount += product.price;
        });
    },
  },
});

export const { addToBasket, calculateTotalAmount, removeFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
