import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={(e)=>props.sortTransactions(e.target.textContent)}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"onClick={(e)=>props.sortTransactions(e.target.textContent)}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {props.transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
