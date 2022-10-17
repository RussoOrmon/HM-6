import React, {useState ,Component, Fragment} from "react";

function CounterBtn(){
   const [count, setCount]=useState(0)
   return(
      <div className="container" >
         <div className="card" text-center my-5>
           <div className="card-body">
            <h1>Counter App </h1>
            <div className="my-5">
               <h2>{count}</h2>
                   <button onClick={()=>setCount(count+1)}><strong> + </strong> </button>
                   <button onClick={()=>setCount(count-1)} disabled={count===0}><strong> - </strong> </button>
                  <button className="btnState"onClick={()=>setCount(0)}> Reset </button>
            </div>
           </div>
           
         </div>
          

      </div>
   )
}
//class CounterBtn extends Component{
//state={
//   count:0
//}

//dec=()=>this.setState(({count})=>({count:count-1}))
//inc=()=>this.setState(({count})=>({count:count+1}))
//   render(){
//      const {count} =this.state
//      return(
//         <div>
//         <button onClick={this.inc} ><strong> + </strong> </button>
//         <div className="btnState"> {count} </div>
//         <button onClick={this.dec} ><strong> - </strong> </button>

//   </div>
//      )
//   }
//}

export default CounterBtn;