import { kMaxLength } from "buffer";
import React, { Fragment, useState } from "react";

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
      <div className="row text-center mt-4">
        {expenses.map((exp, key) =>
          exp.name.length > 1 ? (
            <Fragment key={key}>
              <p className="col-2 offset-4">
                {exp.name} : {exp.value}
              </p>
              <div className="col-2 ">
                <button type="button" className="btn btn-light float-right">
                  <i className="far fa-trash-alt"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-light float-right mr-1"
                >
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </div>
            </Fragment>
          ) : null
        )}
      </div>
      <hr className="col-6" />
      <div className="row justify-content-center text-center mt-4">
        <p className="col-12">All fixed expenses = {sumExpense}</p>
      </div>
    </main>
  );
};

export default Expenses;
