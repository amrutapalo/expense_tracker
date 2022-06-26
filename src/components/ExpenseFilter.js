import { useState } from 'react';
import './ExpenseFilter.css';

function ExpenseFilter(props){

    const [selectedOption, setSelectedOption] = useState('');

    const onSelectHandler = (event) => {
        setSelectedOption(event.target.value);
        props.onSelect(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select onChange={onSelectHandler} value={props.selectedYear}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;