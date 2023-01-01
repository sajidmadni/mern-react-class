// import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";


// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares))

// export const store = createStore(rootReducer, undefined, composedEnhancers);
// export const store = configureStore({ reducer: rootReducer });
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  })




/*
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";


const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares))

// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = configureStore({ reducer: rootReducer });
*/