import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  
  let showTransactions= props.transactions.map(transaction=> <Transaction key={transaction.id} onDelete={props.onDelete}transaction={transaction}/>)
  return (
    
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={e=>props.handleDesc(e)}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={e=>props.handleCat(e)}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {showTransactions}
      </tbody>
    </table>
  );
};

export default TransactionsList;
