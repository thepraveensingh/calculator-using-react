import React from 'react'

const TempCounter = () => {
  let count = 0;

  return (
    <div>
            <p>{count}</p>
            <button onClick={()=>{count = count+1; console.log(count);
            }}>increment</button>
    </div>
  )
}

export default TempCounter
