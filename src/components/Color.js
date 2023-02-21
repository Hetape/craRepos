import React from 'react'
import { ColorNotify } from '../util/Utilities'
export const Color = ({color}) => {
    
  return (
    <div>
        <ColorNotify color={color}>This color is {color}</ColorNotify>
    </div>
  )
}
