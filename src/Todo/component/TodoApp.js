import React from 'react'
import { ListProvider } from '../provider/ListProvider'
import AddItem from './AddItem'
import TodoList from './TodoList'
import '../css/App.css'
import DeleteList from './DeleteList'
import OpenModals from './OpenModals'
import CheckboxItem from './CheckboxItem'
export default function TodoApp() {
  return (
    <ListProvider>
      <AddItem/>
      <TodoList/>
      <OpenModals/>
      <CheckboxItem/>
      <DeleteList/>
    </ListProvider>
  )
}
