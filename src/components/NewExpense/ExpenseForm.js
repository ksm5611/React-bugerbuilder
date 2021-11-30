import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [fillUpTitle, setFillUpTitle] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [updateDate, setUpdateDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   fillUpTitle: "",
  //   changeAmount: "",
  //   updateDate: "",
  // });

  const titleChangeHandler = (event) => {
    setFillUpTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, fillUpTitle: event.target.value };
    // });
    // setUserInput({
    //   ...userInput,
    //   fillUpTitle: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setChangeAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   changeAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setUpdateDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   updateDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("event", event);

    const expenseData = {
      title: fillUpTitle,
      amount: changeAmount,
      date: new Date(updateDate),
    };
    console.log(expenseData);
    setFillUpTitle("");
    setChangeAmount("");
    setUpdateDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={fillUpTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="num"
            min="0.01"
            step="0.01"
            value={changeAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={updateDate}
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
