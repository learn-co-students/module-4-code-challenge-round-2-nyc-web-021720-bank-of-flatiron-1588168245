import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const bankUrl = 'http://localhost:6001/transactions'
class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTransaction: ''
  }

  componentDidMount(){
    fetch(bankUrl)
    .then(res => res.json())
    .then(data => this.setState({ transactions: data}))
  }

  addTransaction = (newTransaction)=>{
    this.setState({transactions: [...this.state.transactions,newTransaction ]})
  }
  
  handleSearchChange = (event)=>{
    // console.log(event.target.value)
    this.setState({searchTransaction: event.target.value})
  }

  filteredTransactions = ()=>{
      this.setState({transactions: this.state.transactions.filter(transaction=> transaction.description === this.state.searchTransaction), searchTransaction: ''})
  }

  sortTransactions = (sortType)=>{
    let sortedTransactions = []
    switch(sortType){
      case "Category":
        sortedTransactions = this.state.transactions.sort((a, b)=> a.category.localeCompare(b.category))
        this.setState({transactions: sortedTransactions})
        break;
      case "Description":
        sortedTransactions = this.state.transactions.sort((a, b)=> a.description.localeCompare(b.description))
        this.setState({transactions: sortedTransactions})
        break;
      default: 
        console.log("Not a choice")
    }
  }

  deleteTransaction = (transactionId)=>{
    let filter = this.state.transactions.filter(transaction=> transaction.id !== transactionId)
    fetch(`${bankUrl}/${transactionId}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>this.setState({transactions: filter}))
  }

  render() {
    console.log(this.state.searchTransaction)
    return (
      <div>
        <Search 
          handleSearchChange={this.handleSearchChange} 
          searchTransaction={this.state.searchTransaction}
          filteredTransactions={this.filteredTransactions}
        />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList 
          transactions={this.state.transactions} 
          sortTransactions={this.sortTransactions}
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
