export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART : " REMOVE_FROM_CART"
};
//total amount of the products in subtotal page
export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};

const cartReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      case ACTIONS.REMOVE_FROM_CART:
        return {
            ...state,
            cart:[]
        }
    default:
      return state;
  }
};

export default cartReducer;
