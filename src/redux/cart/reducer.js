import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};
//retorna todos os atributos do product
// ...product,

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
