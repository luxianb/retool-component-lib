import React from 'react'
import { Retool } from '@tryretool/custom-component-support'

export const Header = () => {
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  })
  return (
    <div className="p-4 border-b border-gray-200 h-full">
      <h1 className="">{`Hello ${name}!`}</h1>
    </div>
  )
}
