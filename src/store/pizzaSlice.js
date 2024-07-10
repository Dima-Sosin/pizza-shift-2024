import { createSlice } from "@reduxjs/toolkit"

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        pizzas: [],
        person: {},
        receiverAddress: {},
        debitCard: {}
    },
    reducers: {
        addPizza: (state, action) => {
            state.pizzas = [...state.pizzas, action.payload]
        },
        deletePizza: (state, action) => {
            state.pizzas = state.pizzas.filter(
                (pizza) => pizza.id !== action.payload.id
            )
        },
        addPerson: (state, action) => {
            state.person = action.payload
        },
        addReceiverAddress: (state, action) => {
            state.receiverAddress = action.payload
        },
        addDebitCard: (state, action) => {
            state.debitCard = action.payload
        },
        deleteAll: (state) => {
            state.pizzas = [];
            state.person = {};
            state.receiverAddress = {};
            state.debitCard = {}
        }
    }
})

export const {
    addPizza,
    deletePizza,
    addPerson,
    addReceiverAddress,
    addDebitCard,
    deleteAll
} = pizzaSlice.actions

export const selectPizzas = (state) => state.pizza.pizzas
export const selectCart = (state) => state.pizza

export default pizzaSlice.reducer