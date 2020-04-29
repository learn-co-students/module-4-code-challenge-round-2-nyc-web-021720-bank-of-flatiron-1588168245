import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {

  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 onClick={(e) => this.props.handleClick(e)} className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 onClick={(e) => this.props.handleClick(e)} className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 onClick={(e) => this.props.handleClick(e)} className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 onClick={(e) => this.props.handleClick(e)} className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {this.props.transactions.map(trans => {
            return <Transaction delete={this.props.delete} data={trans} />
          })}
        </tbody>
      </table>
    );
  };
}

export default TransactionsList;
