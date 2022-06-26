import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import Card from '../Card';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState(2020);
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear() == filteredYear;
  });

  console.log(filteredExpenses);



  //implement two way binding by passing filteredYear back into ExpensesFilters
  const onSelectFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter onSelect={onSelectFilterHandler} selectedYear = {filteredYear} />
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
     </Card>
  );

}

export default Expenses;