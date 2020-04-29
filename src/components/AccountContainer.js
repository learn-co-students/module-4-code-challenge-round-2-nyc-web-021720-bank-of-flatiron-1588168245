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

  // stretch

  handleSort = (sortBy) => {
    let arr = []
    switch(sortBy){
      case "Category":
        arr = this.state.transactions.sort((a,b) => a.category > b.category ? 1 : -1)
        break;
      case "Description":
        arr = this.state.transactions.sort((a,b) => a.description > b.description ? 1 : -1)
        break;
      default:
        console.log('No Transactions')
    }
    this.setState({
      transactions: arr
    })
  }



  render() {
    const searchedTransaction = this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.searchTransaction.toLowerCase()))
    console.log(searchedTransaction)
    return (
      <div>
        <Search 
        handleSearch={this.handleSearchTransaction}
        searchTransaction={this.state.searchTransaction}
        handleSort={this.handleSort}
        />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={searchedTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
