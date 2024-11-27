import React, { useState } from 'react'

const Calc = () => {

    const [data,setData] = useState("");
    const seeResult = () => {
      try {
        setData(eval(data).toString()); // Safely evaluate the expression
      } catch {
        setData("Error");
      }
    };
  return (
    <div className='m-10'>
      <div className="bg-zinc-400   rounded-md shadow-md shadow-black text-white">
        <ul className='p-2'>
          <li>
             <div className='w-full my-5 p-5 bg-white text-black flex justify-end text-2xl rounded-md shadow-md shadow-zinc-900 '>{data}</div>
          </li>
          <li>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data + '7') ; console.log(data);  }}>7</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data + '8')}}>8</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data + '9')}}>9</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data + '*')}}>*</button>
          </li>
          <li>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '4')}}>4</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '5')}}>5</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '6')}}>6</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '-')}}>-</button>
          </li>
          <li>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '1')}}>1</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '2')}}>2</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '3')}}>3</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '+')}}>+</button>
          </li>
          <li>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '0')}}>0</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '.')}}>.</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '#')}}>#</button>
            <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData(data+ '*')}}>*</button>
          </li>
          <li className='flex justify-center'>
          <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={seeResult}>=</button>
          <button className="bg-slate-600 text-silver p-4  shadow-md rounded-md m-2 shadow-zinc-900 " onClick={()=>{setData("")}}>Clear</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Calc
