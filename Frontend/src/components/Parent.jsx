import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Vikraam" age={24} isActive={true}/>
    </div>
  )
}

export default Parent