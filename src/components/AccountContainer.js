import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    date: '',
    description: '',
    category: '',
    amount: '',
    search: ''
  }

  componentDidMount = () => {
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(transactions => {
      this.setState({transactions})
    })
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  handleDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  handleCategory = (e) => {
    this.setState({
      category: e.target.value
    })
  }
  handleAmount = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newTransaction = {}
    newTransaction.id = this.state.transactions.length + 1
    newTransaction.date = this.state.date
    newTransaction.description = this.state.description
    newTransaction.category = this.state.category
    newTransaction.amount = parseInt(this.state.amount, 10)
    fetch('http://localhost:6001/transactions', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    this.setState({
      transactions: [...this.state.transactions, newTransaction],
      date: '',
      description: '',
      category: '',
      amount: ''
    })
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  

  render() {
    let transactions = this.state.transactions
    let date = this.state.date
    let description = this.state.description
    let category = this.state.category
    let amount = this.state.amount
    let searchedTransactions = [...this.state.transactions].filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm amount={amount} category={category} description={description} date={date} handleSubmit={this.handleSubmit} handleAmount={this.handleAmount} handleCategory={this.handleCategory} handleDescription={this.handleDescription} handleDate={this.handleDate} />
        <TransactionsList searchedTransactions={searchedTransactions} transactions={transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
