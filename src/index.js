import store from "./store";
import * as actions from "./actionTypes";

store.dispatch({
  type: "productAdded",
  payload: {
    name: "Product 1",
    price: 1500,
  },
});

store.dispatch({
  type: "productAdded",
  payload: {
    name: "Product 2",
    price: 1000,
  },
});

store.dispatch({
  type: actions.PRODUCT_ADDED,
  payload: {
    name: "Product 3",
    price: 500,
  },
});

store.dispatch({
  type: actions.PRODUCT_MARK_AS_DISCOUNT,
  payload: {
    id: 2,
    hasDiscount: true,
  },
});

console.log(store.getState());
