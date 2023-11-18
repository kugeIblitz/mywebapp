import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month= props.date.toString().split('-')[1];
  const day = props.date.toString().split('-')[2].substring(0, 2);
  const year = props.date.toString().split('-')[0];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
//2021-11-08T00:00:00.000Z