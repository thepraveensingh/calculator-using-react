import React, { useEffect, useState } from "react"
import './Counter.css'
import { set } from "mongoose";
function Counter(){
    const [items,setItems] = useState([1,2,3]);
    const [obj,setObj] = useState({name : 'Praveen', age:22});
    // console.log(items);
    // console.log(obj);
    
    const [count, setCount] = useState(0);
    function decreaseCount(){
      setCount(count-1);
    }

    useEffect(()=>{
      console.log("useEffectran")
    },[])
  return(
  <>
    <br></br>
    This is  Counter
    <br></br>
    <div className = "countr">
      <span>Current Counter : {count} </span>
      <button onClick= {()=>{setCount(count+1)}} > increase </button>
      <button onClick= {decreaseCount} > decrease </button>


    </div>
    <div className= "arraydiv">
      <button onClick={()=>{ setItems([...items,4]) }}>Clickmetoadd4</button>
    </div>
    <div className=" bg-red-500 p-5 rounded-md">
      <button className="bg-blue-500 border-2 border-blue-600 p-2" onClick={()=>{ setObj({...obj,age:21,status:'placed'})  }}>ClicktoUpdateObj</button>
    </div>
    
  </>
  )
}
export default Counter;