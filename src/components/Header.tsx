import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand col-4" to="/">
          Eye on Budget
        </NavLink>

        <div className="col-8">
          <div className="navbar-nav float-right">
            <NavLink className="nav-item nav-link" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/income">
              Income
            </NavLink>
            <NavLink className="nav-item nav-link" to="/expenses">
              Fixed expenses
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
