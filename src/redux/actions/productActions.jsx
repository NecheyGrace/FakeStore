import { ActionTypes } from "../constants/action-types";
// export const removeSelectedProducts = (products) => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
//     payload: products,
//   };
// };
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: products,
  };
};
