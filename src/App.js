import React, { useState } from "react";
import Results from "./components/Results";
import Worksheet from "./components/Worksheet";
import {
  dataRowsMr,
  dataRowsSales,
  dataRowsUSA,
  dataRows,
} from "./components/data";
const App = () => {
  const [data, setData] = useState([]);

  function run() {
    setData(dataRows);
  }
  function clearData() {
    setData([]);
  }
  function changeData(option) {
    if (option == "usa") {
      setData(dataRowsUSA);
    } else if (option == "sales") {
      setData(dataRowsSales);
    } else if (option == "male") {
      setData(dataRowsMr);
    }
  }

  return (
    <div className="site-container">
      <Worksheet clearData={clearData} changeData={changeData} run={run} />
      <Results data={data} />
    </div>
  );
};

export default App;
