export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const DELETE_ALL = "DELETE_ALL"
export const IS_ITEM_ADDED_MSG = "IS_ITEM_ADDED_MSG"
export const IS_ITEM_DELETED = "IS_ITEM_DELETED"

export const listReducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            const newTodo = { id: Math.random(Date.now()), name: action.payload }
            return {
                ...state,
                todo: [...state.todo, newTodo]
            }
        case DELETE_ITEM:
            return {
                ...state,
                todo: state.todo.filter(({id}) => {
                    return id !== action.payload
                    })
            }
        case DELETE_ALL:
            return {
                ...state,
                todo: []
            }
        case IS_ITEM_ADDED_MSG:
            return {
                ...state,
                isItemAddedMsg: action.payload
            }
        case IS_ITEM_DELETED:
            return {
                ...state,
                isItemDeleted: action.payload
            }
        default: 
            return state
    }
}