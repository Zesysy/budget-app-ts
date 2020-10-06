import React, { useState } from "react";
import Expenses from "./Expenses";
import Income from "./Income";

const Main = () => {
  const [value, setValue] = useState({
    income: 1500,
    expenses: 0,
  });

  const [saving, setSaving] = useState(value.income);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    setSaving(saving - value.expenses);
  };

  return (
    <main className="container" style={{ flex: 1 }}>
      <div className="row justify-content-center text-center mt-4">
        <div className="col-lg-12">
          <Income incomeName="Salary" incomeValue={value.income} />
        </div>
        <div className="col-lg-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <Expenses
                handleChange={handleChange}
                expensiveName="Courses"
                calculate={calculate}
              />
              <Expenses
                handleChange={handleChange}
                expensiveName="Coiffeur"
                calculate={calculate}
              />
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <Income incomeName="Saving" incomeValue={saving} />
        </div>
      </div>
    </main>
  );
};

export default Main;
