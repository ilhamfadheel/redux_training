import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const initialState = {
  list: []
};

const slice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    productAdded: (products, action) => {
      products.list.push({
        id: ++lastId,
        name: action.payload.name,
        price: action.payload.price,
        hasDiscount: false,
      });
    },
    productMarkAsDiscount: (products, action) => {
      
      const index = products.list.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index > -1) {
        products.list[index].hasDiscount = action.payload.hasDiscount;
      }
    },
    apiProductsRequestSucceeded: (products, action) => {
      products.list.push(...action.payload);
    },
    piProductRequestFailed: (products, action) => {
      console.log('error', action.payload);
    },
  },
});

export const { productAdded, productMarkAsDiscount, apiProductsRequestSucceeded, piProductRequestFailed } = slice.actions;
export default slice.reducer;
