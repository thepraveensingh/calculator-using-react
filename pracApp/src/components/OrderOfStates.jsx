import React, { useState } from 'react'

const OrderOfStates = () => {
    const [name,setName] = useState("jack")
    const [count,setCount] = useState(0);

    const handleClick = () => {
      if(count %2 == 0){
      setName("jack");
      }
      else{
        setName("daniels")
      }
      setCount(count+1);
    }
  return (
    <div>
      <p>Name : {name}</p>
      <p>Count : {count}</p>
      <button onClick = {handleClick} >Update</button>
    </div>
  )
}

export default OrderOfStates
