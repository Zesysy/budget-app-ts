import React from "react";

export interface Props {
  calculate: any;
  handleChange: any;
  expensiveName: string;
}

const Expenses = ({ handleChange, expensiveName, calculate }: Props) => {
  return (
    <>
      <tr>
        <td className="align-middle">{expensiveName}</td>
        <td>
          <input
            className="form-control text-right"
            name="expenses"
            id="expenses"
            type="number"
            placeholder="0"
            onChange={handleChange}
          />
        </td>
        <td>
          <button
            type="button"
            onClick={() => {
              calculate();
            }}
            className="btn btn-light float-right"
          >
            <i className="fas fa-plus"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Expenses;
