import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onFilterChange(event.target.value)

    }
    return ( <
        div className = 'expenses-filter' >
        <
        div className = 'expenses-filter__control' >



        <
        label
        for = "" > Filter By Year < /label>


        <
        select value = { props.selected }
        onChange = { dropdownChangeHandler } >
        <
        option value = "2022" > 2022 < /option> <
        option value = "2021" > 2021 < /option> <
        option value = "2020" > 2020 < /option> <
        option value = "2019" > 2019 < /option>






        <
        /
        select >

        <
        /
        div > < /
        div >

    );
}
export default ExpenseFilter;