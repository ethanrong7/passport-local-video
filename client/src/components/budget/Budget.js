import React, { useState } from 'react'
import IncomeExpenseInput from './IncomeExpense/IncomeExpenseInput'
import Sankey from './Sankey/Sankey'

export default function Budget() {

    const[incomeData, setIncomeData] = useState([]);

    function getIncomeData(incomeInputs) {
        setIncomeData(prevData => {
            return [...prevData, incomeInputs]
        })
    }

    function deleteIncomeData(id) {
        setIncomeData(prevNotes => {
            return prevNotes.filter((incomeInputItem, index) => {
                return index !== id;
            });
        });
    }

    const[expenseData, setExpenseData] = useState([]);

    function getExpenseData(expenseInputs) {
        setExpenseData(prevData => {
            return [...prevData, expenseInputs]
        })
    }

    function deleteExpenseData(id) {
        setExpenseData(prevNotes => {
            return prevNotes.filter((expenseInputItem, index) => {
                return index !== id;
            });
        });
    }
    return(
        <div>
            <IncomeExpenseInput 
                incomeAdd={getIncomeData}
                incomeDel={deleteIncomeData}
                expenseAdd={getExpenseData}
                expenseDel={deleteExpenseData}
            />
            <Sankey 
                incomeDataProp={incomeData}
                expenseDataProp={expenseData}
            />
        </div>
        
    )
}