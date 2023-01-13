import React from 'react'
import { useListContext } from '../context/ListContext'
import { DELETE_ALL } from '../reducer/ListReducer'

export default function DeleteAllList() {

    const { dispatch } = useListContext()

    const deleteAll = () => {
        dispatch({type: DELETE_ALL})
    }

  return (
    <div>
        <button className='delete-all-btn' onClick={deleteAll}>Poista kaikki</button>
    </div>
  )
}
