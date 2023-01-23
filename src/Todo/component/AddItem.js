import React, { useState } from 'react'
import { useListContext } from '../context/ListContext'
import { ADD_TODO, IS_ADD_ITEM_MODAL_OPEN } from '../reducer/ListReducer'

export default function AddItem() {

    const [ name, setName ] = useState("")

    const { dispatch } = useListContext()

    const addTodo = (e) => {
        e.preventDefault()
        if(name) {
            dispatch({type: IS_ADD_ITEM_MODAL_OPEN, payload: true})
            dispatch({type: ADD_TODO, payload: name})
            setName("")  
            setTimeout(() => {
               return dispatch({type: IS_ADD_ITEM_MODAL_OPEN, payload: false})
            }, 2000)  
        }
    }

  return (
    <div>
        <form>
            <input type="text" className='add-input' required value={name} onChange={(e) => setName(e.target.value)}/>
            <button className='add-btn' onClick={addTodo} type='submit'>Add</button>
        </form>
    </div>
  )
}
