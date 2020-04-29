import React from "react";

class Transaction extends React.Component {

  render() {
    console.log(this.props)
    return (
      <tr onClick={e => this.props.delete(e)} id={this.props.data.id}>
        <td>{this.props.data.date}</td>
        <td>{this.props.data.description}</td>
        <td>{this.props.data.category}</td>
        <td>{this.props.data.amount}</td>
      </tr>
    );
  };
}

export default Transaction;
