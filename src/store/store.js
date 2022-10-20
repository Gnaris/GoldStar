import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slice/product.js";

export default configureStore({
    reducer : {
        product : ProductReducer,
    }
})