import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand col-4" href="/">
          Eye on Budget
        </a>

        <div className="col-8">
          <div className="navbar-nav float-right">
            <a className="nav-item nav-link" href="/income">
              Income
            </a>
            <a className="nav-item nav-link" href="/expenses">
              Expenses
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
