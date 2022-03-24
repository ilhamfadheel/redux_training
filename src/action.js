import * as actions from "./actionTypes";

/**
 *
 * @param {name, price, hasDiscount} product
 * @returns
 */
export function productAdded(product = {}) {
  return {
    type: actions.PRODUCT_ADDED,
    payload: {
      name: product.name ? product.name : null,
      price: product.price ? product.price : null,
      hasDiscount: product.hasDiscount ? true : false,
    },
  };
}
