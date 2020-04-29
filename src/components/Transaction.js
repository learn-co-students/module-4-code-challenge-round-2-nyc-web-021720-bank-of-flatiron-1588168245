import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount} = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td onClick={()=>props.deleteTransaction(id)}>delete</td>
    </tr>
  );
};

export default Transaction;
