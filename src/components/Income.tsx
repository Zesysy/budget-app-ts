import * as React from "react";

export interface Props {
  incomeName: string;
  incomeValue: number;
}

function Income({ incomeName, incomeValue }: Props) {
  return (
    <p>
      {incomeName} : {incomeValue} €
    </p>
  );
}

export default Income;
