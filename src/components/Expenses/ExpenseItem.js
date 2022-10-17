import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
import Counter from "./Counter";


function ExpenseItem(props) {

   const [newTitle, setNewTitle]=useState();

   function changeTitle(){

      setNewTitle('Changed Title')
   }
//   let title=props.expenseTitle;
//function changeHandler(props){
//   console.log(title);
  
//   props.expenseTitle='Changed title'
//console.log(props.expenseTitle);
//}
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
           {/*<h1>{ props.expenseTitle} </h1>*/}
      <div className="expense-item__price">${props.expensePrice}</div>
        {/*<button onClick={changeHandler}>Change title</button>*/}
        <h2> { newTitle}</h2>

        <Counter/>
        <button onClick={changeTitle} >   Click </button>
    
      </div>
    </Card>
  );
}

export default ExpenseItem;
