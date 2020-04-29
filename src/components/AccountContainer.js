import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state ={
    searchTerm: '',
    display: this.props.transactions,
    transaction: [],
    newTransaction: {
      date: "",
      description: "",
      category: "",
      amount: ''
    }
  }

  handleClick = (event) => {
    console.log(event.target.value)
  }

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({newTransaction: {
      [name]: value
      }
    })
  }

  addTransaction = () => {
    this.setState({

    })
  }

  searchTerm = (event) => {

  }

  render() {
    console.log(this.props.transactions)
    return (
      <div>
        <Search changeHandle={this.changeHandle}/>
        <AddTransactionForm addTransaction={this.addTransaction} handleChange={this.handleChange} handleClick={this.handleClick}/>
        <TransactionsList transactions={this.props.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
