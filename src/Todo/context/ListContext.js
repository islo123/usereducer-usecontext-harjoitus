import { useContext } from "react"
import { ListContext } from "../provider/ListProvider"


export const useListContext = () => {
    return useContext(ListContext)
}