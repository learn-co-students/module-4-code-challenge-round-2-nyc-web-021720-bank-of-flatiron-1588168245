import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount = () => {
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(transactions => {
      this.setState({transactions})
    })
  }

  render() {
    let transactions = this.state.transactions
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
