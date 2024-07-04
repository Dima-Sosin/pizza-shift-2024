import { createStore, combineReducers } from "redux"
import { pizzaReducer } from "./pizza-reducer"


const Reducers = combineReducers({
    pizza: pizzaReducer,
})

export const store = createStore(Reducers)