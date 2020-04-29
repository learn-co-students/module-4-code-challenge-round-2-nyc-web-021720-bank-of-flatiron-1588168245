import React from "react";

class Transaction extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.data.date}</td>
        <td>{this.props.data.description}</td>
        <td>{this.props.data.category}</td>
        <td>{this.props.data.amount}</td>
      </tr>
    );
  };
}

export default Transaction;
