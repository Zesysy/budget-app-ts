import React from "react";
import Income from "./Income";

const Main = () => {
  return (
    <main className="container" style={{ flex: 1 }}>
      <div className="row text-center mt-4">
        <div className="col-lg-12">
          <Income incomeName="Salary" incomeValue={1500} />
        </div>
      </div>
    </main>
  );
};

export default Main;
