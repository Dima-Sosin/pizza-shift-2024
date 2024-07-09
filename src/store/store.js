import { configureStore } from "@reduxjs/toolkit"
import pizzaReducer from "./pizzaSlice.js"

export default configureStore({
    reducer: {
        pizza: pizzaReducer
    }
})