import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {     
      // payload = newItem
      const item = state.cart.find(item=>item.pizzaId === action.payload.pizzaId);
      if(!item) {
        state.cart.push(action.payload);
      } else {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity <= 1) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
        return;
      }
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

const cartReducer =  cartSlice.reducer;
export default cartReducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) => {
  const totalCartPrice = state.cart.cart.reduce((acc, cur)=> acc+cur.totalPrice, 0);
  return totalCartPrice;
}
export const getTotalCartQuantity = (state) => {
  const totalCartQuantity = state.cart.cart.reduce((acc, cur)=> acc+cur.quantity, 0);
  return totalCartQuantity;
}

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
}