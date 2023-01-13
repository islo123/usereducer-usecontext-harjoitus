import { useContext } from "react"
import { ListProviderContext } from "../provider/ListProvider"


export const useListContext = () => {
    return useContext(ListProviderContext)
}