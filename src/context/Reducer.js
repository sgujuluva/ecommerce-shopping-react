 const cartReducer = (state,action) => {
    console.log(state)
    switch(action.type){
        case"ADD_TO_CART":
        return {...state,cart:[...state.cart,action.item]}
        default:
            return state;
            
    }
} 

 export default cartReducer 
