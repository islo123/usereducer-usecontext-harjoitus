
export const ADD_TODO = "ADD_TODO"
export const DELETE_ITEM = "DELETE_ITEM"
export const DELETE_LIST = "DELETE_LIST"
export const IS_ADD_ITEM_MODAL_OPEN = "IS_ADD_ITEM_MODAL_OPEN"
export const IS_DELETE_ITEM_MODAL_OPEN = "IS_DELETE_ITEM_MODAL_OPEN"
export const ITEM_CHECKED = "ITEM_CHECKED"
export const FILTER_ITEM_CHECKBOX = "FILTER_ITEM_CHECKBOX"


export const listReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            const newTodo = { id: Math.random(Date.now()), name: action.payload, itemChecked: false}
            return {
                ...state,
                todo: [...state.todo, newTodo]
            }
        case DELETE_ITEM:
            const filter = state.todo.filter(({id}) => {
                return id !== action.payload
            })
            return {
                ...state,
                todo: filter
            }
        case DELETE_LIST:
            return {
                ...state,
                todo: []
            }
        case IS_ADD_ITEM_MODAL_OPEN:
            return {
                ...state,
                isAddItemModalOpen: action.payload
            }
        case IS_DELETE_ITEM_MODAL_OPEN:
            return {
                ...state,
                isDeleteItemModalOpen: action.payload
            }
        case ITEM_CHECKED:
            return  {
                ...state,
                todo: state.todo.map((todo) => {
                if(todo.id === action.payload) {
                    return { ...todo, itemChecked: !todo.itemChecked}
                }
                return todo
            })}
        case FILTER_ITEM_CHECKBOX:
            return {
                ...state,
                todo: state.todo.filter((props) => {
                    return props.itemChecked === action.payload
                })
            }
        default:
            return state
    }
}