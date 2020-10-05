import React, { useState } from "react";
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

  return (
    <main className="container" style={{ flex: 1 }}>
      <div className="row justify-content-center text-center mt-4">
        <div className="col-lg-12">
          <Income incomeName="Salary" incomeValue={value.income} />
        </div>
        <div className="col-lg-6">
          <input
            className="form-control"
            name="expenses"
            type="number"
            placeholder="0"
            onChange={handleChange}
          ></input>
          <button
            type="button"
            onClick={() => {
              setSaving(saving - value.expenses);
            }}
            className="btn btn-light float-right mt-2"
          >
            Calculate
          </button>
        </div>
        <div className="col-lg-12">
          <Income incomeName="Saving" incomeValue={saving} />
        </div>
      </div>
    </main>
  );
};

export default Main;
