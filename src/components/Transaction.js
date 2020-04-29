import React from "react";
const Transaction = (props) => {
  // deconstructing props.transaction
  var {id, date, description, category, amount} = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
