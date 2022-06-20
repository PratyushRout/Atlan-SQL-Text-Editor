import React from "react";
import RowItem from "./RowItem";

const Row = ({ row }) => {
  return (
    <tr>
      {row.map((item) => {
        return <RowItem key={item} text={item} />;
      })}
    </tr>
  );
};

export default Row;
