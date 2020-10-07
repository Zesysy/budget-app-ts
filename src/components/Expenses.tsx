import React from "react";

export interface Props {
  calculate: any;
  handleChange: any;
  expenseName: string;
}

const Expenses = ({ handleChange, expenseName, calculate }: Props) => {
  return (
    <>
      <tr>
        <td className="align-middle">{expenseName}</td>
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
          <button type="button" className="btn btn-light float-right">
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            type="button"
            onClick={() => {
              calculate();
            }}
            className="btn btn-light float-right mr-1"
          >
            <i className="fas fa-plus"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Expenses;
