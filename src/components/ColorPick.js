import React from 'react'
import { Button } from '../util/Utilities'
export const ColorPick = ({color,setColor}) => {
  return (
    <div>
        <Button color={color} onClick={()=>{setColor(color);}}>{color}</Button>
        {/* <Button color={color}>{color}</Button> */}
    </div>
  )
}
