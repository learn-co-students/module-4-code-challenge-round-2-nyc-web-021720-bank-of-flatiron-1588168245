import React from "react";

const Transaction = (props) => {
  const{transaction}= props
  return (
    <tr onClick={(e)=>props.onDelete(e,transaction.id)}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
