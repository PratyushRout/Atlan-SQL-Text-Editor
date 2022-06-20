import React from "react";
import { titleRow, dataRows } from "./data";
import TableBody from "./Tablebody";

const Results = ({ data }) => {
  return (
    <>
      <div className="results">
        <h3 className="results__heading">Sql Statement Output</h3>
        <div className="results__result-area">
          <table>
            <thead>
              <tr className="results__title">
                {titleRow.map((i) => (
                  <th key={i}>{i}</th>
                ))}
              </tr>
            </thead>
            <TableBody data={data} />
          </table>
        </div>
      </div>
    </>
  );
};

export default Results;
