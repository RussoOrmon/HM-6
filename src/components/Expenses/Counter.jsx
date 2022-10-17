
import { useState } from "react";
import "./Counter.css";

function Counter(){
   const [count, setCount]=useState(0);
const inc=()=>{
   setCount(count+1)
}
const dec =()=>{
   setCount(count-1)
}
   return(
      <div>
         <button className="btnPlus" onClick={inc}><strong>+</strong></button>
            <span>{count}</span>
         <button className="btnMinus" onClick={dec} disabled={count===0}><strong>-</strong></button>
      </div>
   )
}
export default Counter;
