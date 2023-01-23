import React from 'react'
import { useListContext } from '../context/ListContext'

export default function OpenModals() {

  const { isAddItemModalOpen, isDeleteItemModalOpen } = useListContext()

  return (
    <div>
      {
        isAddItemModalOpen && <h3 className='item-added-modal'>Item added</h3>
      }
      {
        isDeleteItemModalOpen && <h3 className='item-deleted-modal'>Item Deleted</h3>
      }
    </div>
  )
}
