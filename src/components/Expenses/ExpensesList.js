import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Content not founded</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expenseitem) => (
        <ExpenseItem
          key={expenseitem.id}
          title={expenseitem.title}
          amount={expenseitem.amount}
          date={expenseitem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
