import React from 'react'
import { useListContext } from '../context/ListContext'
import { FILTER_ITEM_CHECKBOX } from '../reducer/ListReducer'

export default function CheckboxItem() {

    const { dispatch } = useListContext()

    const checkedItem = () => {
        dispatch({type: FILTER_ITEM_CHECKBOX, payload: true})
    }

    const checkItem = () => {
        dispatch({type: FILTER_ITEM_CHECKBOX, payload: false})
    }

  return (
    <div>
        <button onClick={() => checkedItem()}>Checked</button>
        <button onClick={() => checkItem()}>Unchecked</button>
    </div>
  )
}
