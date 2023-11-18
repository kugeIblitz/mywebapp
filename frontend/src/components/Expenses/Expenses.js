import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Ensure that props.items is an array, or provide a default empty array
  const itemsArray = Array.isArray(props.items) ? props.items : [];

  const filteredExpenses = itemsArray.filter((expense) => {
    try {
      const expenseDate = new Date(expense.date);
      return (
        Object.prototype.toString.call(expenseDate) === "[object Date]" &&
        !isNaN(expenseDate) &&
        typeof expenseDate.getFullYear === 'function' &&
        expenseDate.getFullYear().toString() === filteredYear
      );
    } catch (error) {
      console.error(`Error processing expense: ${JSON.stringify(expense)}`);
      return false;
    }
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList listItems={itemsArray} />
      </Card>
    </div>
  );
}

export default Expenses;
