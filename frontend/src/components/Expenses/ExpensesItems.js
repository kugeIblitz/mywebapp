import Card from "../UI/Card";
import "./ExpensesItems.css";
import ExpenseDate from "./ExpenseDate";

function ExpensesItems(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__price">{props.amount}$</div>
    </Card>
  );
}

export default ExpensesItems;
