import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [fillUpTitle, setFillUpTitle] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [updateDate, setUpdateDate] = useState("");

  const titleChangeHandler = (event) => {
    setFillUpTitle(event.target.value);
    console.log(fillUpTitle);
  };

  const amountChangeHandler = (event) => {
    setChangeAmount(event.target.value);
    console.log(changeAmount);
  };

  const dateChangeHandler = (event) => {
    setUpdateDate(event.target.value);
    console.log(updateDate);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="num"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
