import React, { useState } from "react";
import Expenses from "./commponents/Expenses/Expenses";
import NewExpense from "./commponents/NewExpense/NewExpense";



///this is just dummy text used for a example

const DUMMY_EXPENSES = [
  // {
  //   id: 'e1',
  //   title: 'Watch',
  //   amount: 5.99,
  //   date: new Date(2020, 7, 14),
  // },

  // { 
  //   id: 'e2',
  //  title: 'New TV', 
  //  amount: 217.46, 
  //  date: new Date(2021, 2, 12) },

  // {
  //   id: 'e3',
  //   title: 'Nike Shoes',
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: 'e4',
  //   title: 'New Desk (Wooden)',
  //   amount: 65.00,
  //   date: new Date(2021, 5, 12),
  // },
];



function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = expense =>{
   setExpenses(prevExpesnes => {
    return [expense, ...prevExpesnes];

   } );
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />

     
    </div>
  );
}

export default App;