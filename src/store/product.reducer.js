import { PRODUCT_ACTION_TYPES } from "./product.types";

const INITIAL_STATE = {
    products: [{id: 1, name: "Test"}]
} 

export const productReducer = (state = INITIAL_STATE, action) => {
    console.log("**********")
    console.log("Inside product reducer")
    console.log(action.payload)
    console.log(action)
    const { type, payload } = action;
    console.log(type)
    console.log(payload)
    console.log("**********")

    switch (type) {
        case PRODUCT_ACTION_TYPES.GET_PRODUCTS:
            return {...state, products: payload};
        case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
            return {...state, products: payload};
        case PRODUCT_ACTION_TYPES.SET_PRODUCTS2:
            return {...state, products: payload};
        default:
            return state;
    }
        
}