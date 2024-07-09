import { createSlice } from '@reduxjs/toolkit'

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        pizzas: [],
        person: {},
        receiverAddress:{},
        debitCard: {}
    },
    reducers: {
        addPizza: (state, action) => {
            state.pizzas = [...state.pizzas, action.payload]
        },
        deletePizza: (state, action) => {
            state.pizzas = state.pizzas.filter(pizza => pizza.id !== action.payload.id)
        },
        changePizza: (state, action) => {
            state.pizzas = state.pizzas.map((pizza) => {
                if (pizza.id === action.payload.id) {
                    return action.payload
                }
                return pizza
            })
        },
        addPerson: (state, action) => {
            state.person = action.payload
        },
        addReceiverAddress: (state, action) => {
            state.receiverAddress = action.payload
        },
        addDebitCard: (state, action) => {
            state.debitCard = action.payload
        }
    }
})

export const {addPizza, deletePizza, addPerson, addReceiverAddress, addDebitCard} = pizzaSlice.actions

export const selectPizzas = (state) => state.pizza.pizzas
export const selectCart = (state) => state.pizza

export default pizzaSlice.reducer