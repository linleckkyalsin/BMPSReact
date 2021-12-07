import react, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     entertitle: '',
    //     enteramount: '',
    //     enterdate: ''
    // });
    const [entertitle, subentertitle] = useState('');
    const [enteramount, subsenteramount] = useState('');
    const [enterdate, subenterdate] = useState('')
    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     entertitle: event.target.value
        // })
        // setUserInput((prevstate) => {
        //     return {
        //         ...prevstate,
        //         entertitle: event.target.value
        //     }
        // })
        subentertitle(event.target.value);


    };
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteramount: event.target.value
        // })
        // setUserInput((prevstate) => {
        //     return {
        //         ...prevstate,
        //         enteramount: event.target.value
        //     }
        // })
        subsenteramount(event.target.value);

    };
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     userInput,
        //     enterdate: event.target.value
        // })
        // setUserInput((prevstate) => {
        //     return {
        //         ...userInput,
        //         enterdate: event.target.value
        //     }
        // })
        subenterdate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const Expensedata = {
            title: entertitle,
            amount: enteramount,
            date: enterdate

        }
        props.onSaveExpenseData(Expensedata);
        subentertitle('');
        subsenteramount('');
        subenterdate('');

    };
    return ( <
        form onSubmit = { submitHandler } >

        <
        div className = 'new-expense__controls' >


        <
        div className = 'new-expense__control' >
        <
        label
        for = "" > Title < /label>

        <
        input type = "text"
        value = { entertitle }
        onChange = { titleChangeHandler }
        />

        <
        /
        div >


        <
        div className = 'new-expense__control' >
        <
        label
        for = "" > Amount < /label>

        <
        input type = "number"
        min = '0.01'
        step = '0.01'
        value = { enteramount }
        onChange = { amountChangeHandler }
        />

        <
        /
        div >


        <
        div className = 'new-expense__control' >
        <
        label
        for = "" > Date < /label>

        <
        input type = "date"
        min = '2019-01-01'
        max = '2022-12-31'
        value = { enterdate }
        onChange = { dateChangeHandler }
        />

        <
        /
        div > < /
        div >


        <
        div className = 'new-expense__actions' >
        <
        button type = "submit" > Add Expense < /button> < /
        div >


        <
        /
        form > );
}
export default ExpenseForm;