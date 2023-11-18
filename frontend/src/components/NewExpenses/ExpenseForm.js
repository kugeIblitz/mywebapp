import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [EnteredTitle, setTitle] = useState("");
  const [EnteredAmount, setAmount] = useState("");
  const [EnteredDate, setDate] = useState("");

  function inputHandler(identifier, value) {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const inputData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(inputData);
    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
          value={EnteredTitle}
            type="text"
            name="title"
            onChange={(event) => {
              inputHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
          value={EnteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {
              inputHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
          value={EnteredDate}
            type="date"
            name="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={(event) => {
              inputHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
