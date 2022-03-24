import { MARK_PRODUCT_AS_DISCOUNT, PRODUCT_ADDED } from './action-types';

/**
 *
 * @param {name, price, hasDiscount} product
 * @returns
 */
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

