export const ACTIONS = {
    ADD_TO_CART : "ADD_TO_CART",
}
const cartReducer = (state,action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        case ACTIONS.ADD_TO_CART:
        return {
            ...state,
            cart:[...state.cart,action.item]}
        default:
            return state;
            
    }
} 

 export default cartReducer 
 