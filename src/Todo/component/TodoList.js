import React from 'react'
import { useListContext } from '../context/ListContext'
import { DELETE_ITEM, IS_DELETE_ITEM_MODAL_OPEN, ITEM_CHECKED } from '../reducer/ListReducer'

export default function TodoList() {

    const { todo, dispatch } = useListContext()

    
    const deleteItem = (id) => {
        dispatch({type: IS_DELETE_ITEM_MODAL_OPEN, payload: true})
        dispatch({type: DELETE_ITEM, payload: id})
        setTimeout(() => {
            return dispatch({type: IS_DELETE_ITEM_MODAL_OPEN, payload: false})

        }, 2000)
    }

  return (
    <div className='item-container'>
        {
           todo.map(({name, id, itemChecked}) => {
                return (
                    <div key={id} className='item'>
                        <h3 className='item-name'>{name}</h3>
                        <input type="checkbox" value={itemChecked} onChange={() => dispatch({type: ITEM_CHECKED, payload: id})}/>
                        <button onClick={() => deleteItem(id)} className='delete-btn'>X</button>
                    </div>
                )
            })
        }
    </div>
  )
}
