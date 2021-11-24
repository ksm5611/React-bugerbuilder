import Expenseitem from "./Expenseitem";
import "./Expenses.css";

function Expenses(props) {
  console.log("what is this", props);
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
