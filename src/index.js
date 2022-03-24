// import { markProductAsDiscount, productAdded } from './store/product/action'; // folder approach
import { productMarkAsDiscount, productAdded } from './store/product'; // file approach
import { productCartAdded, productCartRemoved } from './store/cart'; // file approach

import store from './store/store';
import { userAdded } from './store/user';

store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(userAdded({ name: 'slamet', balance: 999999 }));
store.dispatch(userAdded({ name: 'yanto', balance: -999999 }));

store.dispatch(productAdded({ name: 'Product 1', price: 500 }));
store.dispatch(productAdded({ name: 'Product 2', price: 1000 }));
store.dispatch(productMarkAsDiscount({ id: 1, hasDiscount: true }));

store.dispatch(productCartAdded({ productId: 1, quantity: 2 }));
store.dispatch(productCartAdded({ productId: 2, quantity: 1 }));
store.dispatch(productCartRemoved({ id: 2 }));

store.dispatch({
  type: 'apiRequest',
  payload: {
    url: 'https://fakestoreapi.com/products',
    method: 'GET',
    onSuccess: 'onsuccess',
    onError: 'onerror'
  }
})
