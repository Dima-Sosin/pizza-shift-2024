const initialState = {
    pizzaOrders: [],
}

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA":
            return {
                ...state,
                pizzaOrders: [...state.pizzaOrders, action.pizza],
            }
        case "DELETE_PIZZA":
            return {
                ...state,
                pizzaOrders: [],
            }
        case "CHANGE_PIZZA":
            return {
                ...state,
                pizzaOrders: state.pizzaOrders.map((el) => {
                    if (el.id === action.pizza.id) {
                        return action.pizza
                    }
                    return el
                }),
            }
        default:
            return state
    }
}

export const addPizzaAction = (value) => ({
    type: "ADD_PIZZA",
    pizza: value,
})
export const deletePizzaAction = (value) => ({
    type: "DELETE_PIZZA",
    pizzaId: value
})
export const changePizzaAction = (value) => ({
    type: "CHANGE_PIZZA",
    pizza: value
})