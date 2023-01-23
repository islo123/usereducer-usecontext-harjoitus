import { createContext, useReducer } from "react"
import { listReducer } from "../reducer/ListReducer"

export const ListContext = createContext()

const defaultState = {
    todo: [],
    isAddItemModalOpen: false,
    isDeleteItemModalOpen: false,
}



export const ListProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(listReducer, defaultState)

    return (
         <ListContext.Provider value={{...state, dispatch}}>
            {children}
         </ListContext.Provider>
    )
}