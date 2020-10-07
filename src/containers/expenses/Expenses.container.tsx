import React, { useState } from "react";

const Expenses = () => {
  const [expense, setExpense] = useState({
    name: "Shopping",
    value: 0,
  });

  const [expenses, setExpenses] = useState([{ name: "", value: 0 }]);

  const [sumExpense, setSumExpense] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    let expenseValue = Number(expense.value);
    setSumExpense(sumExpense + expenseValue);
  };

  const handleClik = () => {
    const newObject = {
      name: expense.name,
      value: expense.value,
    };
    setExpenses([...expenses, newObject]);
    calculate();
  };

  return (
    <main className="container" style={{ flex: 1 }}>
      <div className="row justify-content-center text-center mt-4">
        <div className="col-lg-2">
          <input
            className="form-control text-right"
            name="name"
            id="name"
            type="text"
            placeholder="Shopping"
            onChange={handleChange}
            value={expense.name}
          />
        </div>
        <div className="col-lg-2">
          <input
            className="form-control text-right"
            name="value"
            id="value"
            type="number"
            placeholder="0"
            onChange={handleChange}
            value={expense.value}
          />
        </div>
        <button
          onClick={() => handleClik()}
          type="button"
          className="btn btn-light float-right"
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="row justify-content-center text-center mt-4">
        {expenses.map((exp) =>
          exp.name.length > 1 ? (
            <p className="col-12">
              {exp.name} : {exp.value}
            </p>
          ) : null
        )}
      </div>
      <hr className="col-6" />
      <div className="row justify-content-center text-center mt-4">
        <p className="col-12">= {sumExpense}</p>
      </div>
    </main>
  );
};

export default Expenses;
