import { createAction } from "@reduxjs/toolkit";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const getProducts = () => 
    createAction(PRODUCT_ACTION_TYPES.GET_PRODUCTS)

export const setProducts = (products) => {
    console.log("============")
    console.log("Inside product action")
    console.log(PRODUCT_ACTION_TYPES.SET_PRODUCTS);
    console.log(products);
    console.log("============")
    createAction({type: PRODUCT_ACTION_TYPES.SET_PRODUCTS, payload: products})
}

export const setProducts2 = () => {
    console.log("============")
    console.log("Inside product action 2")
    console.log(PRODUCT_ACTION_TYPES.SET_PRODUCTS);
    console.log("============")
    createAction({type: PRODUCT_ACTION_TYPES.SET_PRODUCTS, payload: []})
}
    
