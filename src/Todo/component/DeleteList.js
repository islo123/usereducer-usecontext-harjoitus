import React from 'react'
import { useListContext } from '../context/ListContext'
import { DELETE_LIST } from '../reducer/ListReducer'

export default function DeleteList() {

  const { dispatch } = useListContext()

  const deleteList = () => {
    dispatch({type: DELETE_LIST})
  }

  return (
    <div>
      <button onClick={() => deleteList()} className='delete-all-btn'>Delete List</button>
    </div>
  )
}
