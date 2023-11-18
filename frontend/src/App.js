import { useState, useEffect } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  const onAddExpenseHandler = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/expenses', data);
      setExpenses((prevExpenses) => [response.data, ...prevExpenses]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <>
      <Expenses items={expenses} />
      <NewExpense onAddExpense={onAddExpenseHandler} />
    </>
  );
}

export default App;
