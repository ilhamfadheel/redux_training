import {
  MARK_PRODUCT_AS_DISCOUNT,
  PRODUCT_ADDED,
  PRODUCT_REMOVED,
} from './action-types';

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          price: action.payload.price,
          hasDiscount: action.payload.hasDiscount,
        },
      ];

    case PRODUCT_REMOVED:
      return state.filter((product) => product.id !== action.payload.id);

    case MARK_PRODUCT_AS_DISCOUNT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            hasDiscount: true,
          };
        }
        return product;
      });

    default:
      return state;
  }
}
