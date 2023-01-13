import React, { useState } from 'react'
import { useListContext } from '../context/ListContext'
import { ADD_ITEM, IS_ITEM_ADDED_MSG } from '../reducer/ListReducer'

export default function AddItem () {
    const [ name, setName ] = useState("")

    const { isItemDeleted, isItemAddedMsg, dispatch } = useListContext()
    
    const addItem = (e) => {
        e.preventDefault()
        if(name) {
            dispatch({type: IS_ITEM_ADDED_MSG, payload: true})
            dispatch({type: ADD_ITEM, payload: name})
            setName("")        
            setTimeout(() => {
                dispatch({type: IS_ITEM_ADDED_MSG, payload: false})
            }, 2000)   
        }


    }

  return (
    <div>
        {
            isItemDeleted && <h3 className='item-deleted-msg'>Tehtävä poistettu</h3>
        }
        {
            isItemAddedMsg && <h3 className='item-added-msg'>Tehtävä Lisätty</h3>
        }
        <input className='add-input' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button className='add-btn' onClick={addItem}>Lisää tehtävä</button>
    </div>
  )
}
