import React from 'react'
import { ListProvider } from '../provider/ListProvider'
import AddItem from './AddItem'
import DeleteAllList from './DeleteAllList'
import TodoList from './TodoList'
import "../css/App.css"

export default function TodoApp() {
  return (
    <div>
        <ListProvider>
            <AddItem/>           
            <TodoList/>
            <DeleteAllList/>
        </ListProvider>
    </div>
  )
}
