import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((year) => {
    return year.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>Content not founded</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expenseitem) => (
      <ExpenseItem
        key={expenseitem.id}
        title={expenseitem.title}
        amount={expenseitem.amount}
        date={expenseitem.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
