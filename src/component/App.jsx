import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Electricity",
      date: new Date(2021, 4, 21),
      amount: "2393",
    },
    {
      id: "e2",
      title: "Grocery",
      date: new Date(2021, 4, 20),
      amount: "10000",
    },
    { id: "e3", title: "Rent", date: new Date(2021, 4, 1), amount: "25000" },
    { id: "e4", title: "Gifts", date: new Date(2021, 4, 29), amount: "1500" },
  ];
  return (
    <div>
      <ExpenseList expense={expense} />
    </div>
  );
};

export default App;
