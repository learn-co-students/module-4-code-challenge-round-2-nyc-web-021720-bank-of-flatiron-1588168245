import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} />
        <TransactionsList delete={this.props.delete} handleClick={this.props.handleClick} transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
