import './App.css';
import Expense from './components/Expense/Expense'
import React, { useState } from 'react';
import NewExpense from '../src/components/NewExpense/NewExpense'
const DUMMY_EXPENSES = [{
        id: "e1",
        title: "Home",
        amount: 54.34,
        date: new Date(2019, 6, 3)
    },
    {
        id: "e2",
        title: "Car",
        amount: 12.34,
        date: new Date(2020, 1, 2)
    },
    {
        id: "e3",
        title: "Phone",
        amount: 34.34,
        date: new Date(2021, 5, 12)
    }
];

function App() {
    const [expenses, subexpense] = useState(DUMMY_EXPENSES);
    // return React.createElement('h2', {}, 'lets get started');
    const addExpenseData = (expenseData) => {
        subexpense((prevExpense) => {
            return [expenseData, ...prevExpense]

        })
        console.log(expenseData);
    }
    return ( <
        div >


        <
        NewExpense onAddExpense = { addExpenseData }
        />



        <
        Expense expenses = { expenses } > < /Expense> < /
        div >
    );
}

export default App;