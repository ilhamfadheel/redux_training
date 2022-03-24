import { productMarkAsDiscount, productAdded } from "./store/product";
import { productCartAdded, productCartRemoved } from "./store/cart";

import store from "./store/store";
import { userAdded } from "./store/user";

store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(userAdded({ name: "Ilham", balance: 100 }));
store.dispatch(userAdded({ name: "Fadhil", balance: 200 }));

store.dispatch(productAdded({ name: "Sabun", price: 10 }));
store.dispatch(productAdded({ name: "Shampoo", price: 20 }));
store.dispatch(productMarkAsDiscount({ id: 1, hasDiscount: true }));

store.dispatch(productCartAdded({ productId: 1, quantity: 2 }));
store.dispatch(productCartAdded({ productId: 2, quantity: 1 }));
store.dispatch(productCartRemoved({ id: 2 }));

store.dispatch({
  type: "apiRequest",
  payload: {
    url: "https://fakestoreapi.com/products",
    method: "GET",
    onSuccess: "onsuccess",
    onError: "onerror",
  },
});
