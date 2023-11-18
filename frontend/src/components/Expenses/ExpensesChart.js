import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseDate = new Date(expense.date);

    // Check if expenseDate is a valid Date object
    if (
      Object.prototype.toString.call(expenseDate) === "[object Date]" &&
      !isNaN(expenseDate) &&
      typeof expenseDate.getMonth === 'function'
    ) {
      const expenseMonth = expenseDate.getMonth();
      chartDataPoints[expenseMonth].value += expense.amount;
    } else {
      // Handle the case where expense.date is not a valid Date object
      console.error(`Invalid date for expense: ${JSON.stringify(expense)}`);
    }
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
