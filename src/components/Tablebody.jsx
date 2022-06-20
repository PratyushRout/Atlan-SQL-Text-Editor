import React from "react";
import Row from "./Row";

const Tablebody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => {
        return <Row key={index} row={row}></Row>;
      })}
    </tbody>
  );
};

export default Tablebody;
