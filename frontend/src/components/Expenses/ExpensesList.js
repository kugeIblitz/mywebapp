import React from 'react';

import ExpensesItems from './ExpensesItems';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.listItems.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.listItems.map((expense) => (
        <ExpensesItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;