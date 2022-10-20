import { createSlice } from "@reduxjs/toolkit";

import Balle from "../../asset/produit.jpeg";

const Product = createSlice({
    name : "produit",
    initialState : {
        product : [
            {img : Balle, name : "Balle Gst", price : "1.00€", comment : "Magnifique"},
            {img : Balle, name : "Balle Gst", price : "1.00€", comment : "Magnifique"},
        ],
        clicked : {img : Balle, name : "Balle Gst", price : "1.00€", comment : "Magnifique"},
    },
    reducers : {
        setClicked(state, {payload}){
            state.product = {payload}
        }
    }
})

export default Product.reducer;
export const {setClicked} = Product.actions