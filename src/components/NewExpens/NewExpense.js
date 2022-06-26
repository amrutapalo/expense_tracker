import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

import { useState } from 'react';



function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData={
            ...enteredExpenseData, 
            id : Math.random().toString()
        }

        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);

    }

    const onClickExpensesHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
        { !isEditing && <button onClick={onClickExpensesHandler}>Add New Expense</button>}   
        { isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>  
    );
}

export default NewExpense;