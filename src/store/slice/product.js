import { createSlice } from "@reduxjs/toolkit";

import Balle from "../../asset/produit.jpeg";

const Product = createSlice({
    name : "produit",
    initialState : {
        product : [
            {id : 0, img : Balle, name : "Balle Gst", price : "1.00€", comment : "Magnifique"}
        ],
        quantity : null,
    },
    reducers : {
        setQuantities(state, {payload})
        {
            state.quantity = payload
        }
    }
})

export default Product.reducer;
export const {setQuantities} = Product.actions