import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    date: '',
    description: ''

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
  handleDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  render() {
    let transactions = this.state.transactions
    console.log(this.state.description)
    return (
      <div>
        <Search />
        <AddTransactionForm handleDescription={this.handleDescription} handleDate={this.handleDate} />
        <TransactionsList transactions={transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
