import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchTransaction: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({ transactions: data }))
  }

  addTransaction = (transaction) => {
    this.setState({ transactions: [...this.state.transactions, transaction]})
  }

  handleSearchTransaction = (event) => {
    this.setState({searchTransaction: event.target.value})
  }



  render() {
    const searchedTransaction = this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.searchTransaction.toLowerCase()))
    console.log(searchedTransaction)
    return (
      <div>
        <Search 
        handleSearch={this.handleSearchTransaction}
        searchTransaction={this.state.searchTransaction}
        />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={searchedTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
