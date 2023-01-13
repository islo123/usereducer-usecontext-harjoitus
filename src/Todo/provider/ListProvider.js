import { createContext, useReducer } from "react"
import { listReducer } from "../reducer/ListReducer"

export const ListProviderContext = createContext() 

const defaulState = {
    todo: [],
    isItemAddedMsg: false,
    isItemDeleted: false,
}

export const ListProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(listReducer, defaulState)

    return (
        <ListProviderContext.Provider value={{...state, dispatch}}>
            {children}
        </ListProviderContext.Provider>
    )
}