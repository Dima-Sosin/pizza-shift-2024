import { createSlice } from '@reduxjs/toolkit'

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        pizzaOrders: []
    },
    reducers: {
        addPizza: (state, action) => {
            state.pizzaOrders = [...state.pizzaOrders, action.pizza]
        },
        deletePizza: (state) => {
            state.pizzaOrders = []
        },
        changePizza: (state, action) => {
            state.pizzaOrders = state.pizzaOrders.map((el) => {
                if (el.id === action.pizza.id) {
                    return action.pizza
                }
                return el
            })
        }
    }
})

export const {addPizza, deletePizza, changePizza} = pizzaSlice.actions

export const selectPizzaOrders = (state) => state.pizza.pizzaOrders

export default pizzaSlice.reducer