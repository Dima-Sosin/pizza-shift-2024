import { createSlice } from '@reduxjs/toolkit'

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        pizzaOrders: []
    },
    reducers: {
        addPizza: (state, action) => {
            state.pizzaOrders = [...state.pizzaOrders, action.payload]
        },
        deletePizza: (state, action) => {
            state.pizzaOrders = state.pizzaOrders.filter(pizza => pizza.id !== action.payload.id)
        },
        changePizza: (state, action) => {
            state.pizzaOrders = state.pizzaOrders.map((pizza) => {
                if (pizza.id === action.payload.id) {
                    return action.payload
                }
                return pizza
            })
        }
    }
})

export const {addPizza, deletePizza, changePizza} = pizzaSlice.actions

export const selectPizzaOrders = (state) => state.pizza.pizzaOrders

export default pizzaSlice.reducer