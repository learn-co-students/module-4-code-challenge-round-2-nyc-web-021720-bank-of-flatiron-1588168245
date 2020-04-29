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

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value})
    console.log(event.target.value)
  }

  addNewTransaction = newTransaction => {
    this.setState({ transactions: [...this.state.transactions, newTransaction]})
  }


  // searchFilter = () => {
  // }
  
  render() {
    let allTransactions = this.state.transactions 
    if (this.state.searchTerm !== "") {
      allTransactions = allTransactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    } 
   
    
    // console.log(allTransactions)
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm />
        <TransactionsList transactions={allTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
