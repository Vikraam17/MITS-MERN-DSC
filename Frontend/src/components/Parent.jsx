import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Vikraam" age={24} 
        isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:987643210,
          email:"vikraam@gmail.com"
        }}/>
        <Child name="Vinothan" age={22} 
        isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:987643210,
          email:"vinothan@gmail.com"
        }}/>
    </div>
  )
}

export default Parent