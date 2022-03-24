import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const initialState = [];

const slice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    productCartAdded: (carts, action) => {
      carts.push({
        id: ++lastId,
        productId: action.payload.productId,
        quantity: action.payload.quantity,
      });
    },
    productCartRemoved: (carts, action) => {
      const index = carts.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (index > -1) {
        carts.splice(index, 1);
      }
    },
  },
});

export const { productCartAdded, productCartRemoved } = slice.actions;
export default slice.reducer;
