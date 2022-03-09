import React from 'react';
import { useState } from 'react';
import Input from './CreateInput/Input';
import "./IncomeExpenseInput.css";
import CreateInput from './CreateInput/CreateInput';

export default function IncomeExpenseInput(props) {

  const [incomeInputs, setIncomeInputs] = useState([]);

  // Pass back new input into parent component to rerender in Sankey
  function addIncomeInput(newInput) {
    setIncomeInputs(prevInput => { 
      return [...prevInput, newInput];
    })
    props.incomeAdd(newInput);
  }

  function deleteIncomeInput(id) {
    setIncomeInputs(prevNotes => {
      return prevNotes.filter((incomeInputItem, index) => {
        return index !== id;
      });
    });
    props.incomeDel(id);
  }

  const [expenseInputs, setExpenseInputs] = useState([]);

  function addExpenseInput(newInput) {
    setExpenseInputs(prevInput => {
      return [...prevInput, newInput];
    })
    props.expenseAdd(newInput);
  }

  function deleteExpenseInput(id) {
    setExpenseInputs(prevNotes => {
      return prevNotes.filter((expenseInputItem, index) => {
        return index !== id;
      });
    });
    props.expenseDel(id);
  }

  return (
   <div className="IncomeExpenseInput">
    <h1>Income</h1>
    <div>
      <p className="Category">Category</p>
      <p className="Amount">Amount</p>
    </div>
    <CreateInput onAdd={addIncomeInput}/>
    {incomeInputs.map((incomeInputItem, index) => {
      return (
        <Input
          key={index}
          id={index}
          category={incomeInputItem.category}
          amount={incomeInputItem.amount}
          onDelete={deleteIncomeInput}
        />
      )
    })}
    <h1>Expense</h1>
    <CreateInput onAdd={addExpenseInput}/>
    {expenseInputs.map((expenseInputItem, index) => {
      return (
        <Input
          key={index}
          id={index}
          category={expenseInputItem.category}
          amount={expenseInputItem.amount}
          onDelete={deleteExpenseInput}
        />
      )
    })}
   </div>
  )
}