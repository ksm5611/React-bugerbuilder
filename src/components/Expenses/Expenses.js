import React, { useState } from "react";
import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <Expenseitem
          title={props.expensesItems[0].title}
          amount={props.expensesItems[0].amount}
          date={props.expensesItems[0].date}
        ></Expenseitem>
        <Expenseitem
          title={props.expensesItems[1].title}
          amount={props.expensesItems[1].amount}
          date={props.expensesItems[1].date}
        ></Expenseitem>
        <Expenseitem
          title={props.expensesItems[2].title}
          amount={props.expensesItems[2].amount}
          date={props.expensesItems[2].date}
        ></Expenseitem>
        <Expenseitem
          title={props.expensesItems[3].title}
          amount={props.expensesItems[3].amount}
          date={props.expensesItems[3].date}
        ></Expenseitem>
      </Card>
    </div>
  );
};

export default Expenses;
