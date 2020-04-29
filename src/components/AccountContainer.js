import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/transactions")
    .then(response => response.json())
    .then(data => this.setState({ transactions: data}))
  }

  

  searchFilter = () => {
    let allTransactions = this.state.transactions 
    if (this.state.searchTerm !== "") {
      allTransactions = allTransactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.description.toLowerCase()))
    } 
    return allTransactions
  }

  render() {

    console.log(allTransactions)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
