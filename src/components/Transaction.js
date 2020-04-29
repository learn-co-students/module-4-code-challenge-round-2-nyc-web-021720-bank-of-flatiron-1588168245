import React from "react";

const Transaction = (props) => {
  const{bank}=props
  return (
    <tr>
      <td>{bank.date}</td>
      <td>{bank.description}</td>
      <td>{bank.category}</td>
      <td>{bank.amount}</td>
    </tr>
  );
};

export default Transaction;
