import react from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredexpenseData) => {
        const expenseData = {
            ...enteredexpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return ( <
        Card className = 'new-expense' >

        <
        ExpenseForm onSaveExpenseData = { saveExpenseDataHandler }
        /> < /
        Card > );
};
export default NewExpense;