import React from 'react'
import { useListContext } from '../context/ListContext'
import { DELETE_ITEM, IS_ITEM_DELETED } from '../reducer/ListReducer'

export default function TodoList() {

    const { todo, dispatch } = useListContext()

    const deleteItem = (id) => {
        dispatch({type: IS_ITEM_DELETED, payload: true})
        dispatch({type: DELETE_ITEM, payload: id})
        setTimeout(() => {
            dispatch({type: IS_ITEM_DELETED, payload: false})
        }, 2000)
    }


    return (
        <div className='item-container'>
            {
                todo.length > 0 ? todo.map(({id, name}) => {
                    return (
                        <div className='item' key={id}>
                            <h3 className='item-name'>{name}</h3>
                            <button className='delete-btn' onClick={() => deleteItem(id)}>X</button>
                        </div>
                    )
                }): <h3 style={{textAlign: "center"}}>Ei tehtäviä</h3>
            }
        </div>
    )
}
