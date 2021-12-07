import React, { useState } from 'react';
import ExpenseItem from './ExpenxeItem';
import './Expense.css';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
const Expense = (props) => {
    const [filteryear, subfilteryear] = useState('2020');
    const FilterYearChangeHandler = (selectedYear) => {
        subfilteryear(selectedYear)

    };

    return ( <
        Card className = 'expense' >


        <
        ExpenseFilter selected = { filteryear }
        onFilterChange = { FilterYearChangeHandler }
        />

        {
            props.expenses.map(expense => {
                return ( <
                    ExpenseItem key = { expense.id }
                    title = { expense.title }
                    date = { expense.date }
                    amount = { expense.amount } >

                    <
                    /ExpenseItem>
                );
            })
        }








        <
        /Card>
    );
}
export default Expense;