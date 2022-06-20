import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";

import logo from "./../images/Atlan_logo.svg";
const Worksheet = ({ run, changeData, clearData }) => {
  const [code, setCode] = useState("Select * from Employees;");
  function handleChange(e) {
    changeData(e.target.value);
  }
  function handleClear() {
    clearData();
  }
  return (
    <>
      <div className="worksheet ">
        <div className="header__logo">
          <img src={logo} />
        </div>
        <div className="worksheet__header">
          <div className="header__controls">
            <button
              className="button button--primary button-play"
              onClick={run}
            >
              <span>Run</span> <FiPlay size={24} />
            </button>
            <button className="button button--secondary" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
        <div className="worksheet__queries">
          <select onChange={handleChange}>
            <option value="">Perform a predefined operation</option>
            <option value="male">Select All male employees</option>
            <option value="usa">Select Employees from the USA</option>
            <option value="sales">
              Select Employees who are sales representatives
            </option>
          </select>
        </div>
        <div className="coding-area-container">
          <p className="worksheet__title">SQL Worksheet</p>
          <textarea
            name=""
            value={code}
            onChange={(e) => setCode(e.target.value)}
            id=""
            className="worksheet__coding-area"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Worksheet;
