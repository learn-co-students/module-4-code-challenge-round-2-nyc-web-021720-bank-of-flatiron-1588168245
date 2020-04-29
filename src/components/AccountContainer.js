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
    amount: ''
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
    console.log(newTransaction)
  }
  

  render() {
    let transactions = this.state.transactions
    console.log(this.state.amount)
    return (
      <div>
        <Search />
        <AddTransactionForm handleAmount={this.handleAmount} handleCategory={this.handleCategory} handleDescription={this.handleDescription} handleDate={this.handleDate} />
        <TransactionsList transactions={transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
