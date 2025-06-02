import React from 'react'
import { Retool } from '@tryretool/custom-component-support'
import { Reorder } from 'motion/react'

export const ReorderList = () => {
  const [items, setItems] = Retool.useStateArray({
    name: 'items',
    initialValue: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
  })

  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item, index) => {
        if (!item) return null
        return (
          <Reorder.Item
            key={item?.toString() ?? 'item-' + index}
            value={item}
            onReorder={setItems}
            className="p-4 border border-gray-200 rounded-lg m-2 bg-white shadow-sm"
          >
            <div className="text-center">
              <h2 className="text-lg font-semibold">{item.toString()}</h2>
              <p className="text-gray-500">Position: {index}</p>
            </div>
          </Reorder.Item>
        )
      })}
    </Reorder.Group>
  )
}
