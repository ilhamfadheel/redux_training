export const PRODUCT_ADDED = "product added"
export const PRODUCT_REMOVED = "product removed"
export const MARK_PRODUCT_AS_DISCOUNT = "mark product as discount"

export function productAdded(product = {}) {
  return {
    type: PRODUCT_ADDED,
    payload: {
      name: product.name ? product.name : null,
      price: product.price ? product.price : null,
      hasDiscount: product.hasDiscount ? true : false,
    },
  };
}

export function markProductAsDiscount(product = {}) {
  return {
    type: MARK_PRODUCT_AS_DISCOUNT,
    payload: {
      id: product.id ? product.id : null,
      hasDiscount: true,
    }
  }
}

let lastId = 0;
const initialState = [];

export function reducer(state = initialState, action) {
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
