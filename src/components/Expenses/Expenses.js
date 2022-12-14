import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[0].amount}
        date={items[0].date}
      />
    </Card>
  );
}

export default Expenses;
