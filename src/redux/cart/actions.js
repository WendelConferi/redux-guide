import CartActionTypes from "./action-types";

//criando o corpo do payload com a action correta, para enviar para o reducer
export const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUATITY,
  payload,
});

export const decreaseProductQuantity = (payload) => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
