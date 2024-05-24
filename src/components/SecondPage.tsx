import { useContext, useState } from "react";
import Dialog from "./Dialog";
import { ValueContext } from "./OverallContainer";

function SecondPage() {
  const users = useContext<string[]>(ValueContext);
  let [expenses, setExpenses] = useState<any[]>([]);
  let [showDialog, setDialog] = useState<boolean>(false);

  function onAddExpensesHandler() {
    setDialog((s) => !s);
  }
  console.log(users);
  return (
    <>
      <h2>Click on the Add expense button to create an expense</h2>
      <button onClick={onAddExpensesHandler}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li>{expense}</li>
        ))}
      </ul>
      {showDialog && <Dialog></Dialog>}
    </>
  );
}
export default SecondPage;
