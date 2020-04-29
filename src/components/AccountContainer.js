import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactions: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({ transactions: data }))
  }

  addTransaction = (transaction) => {
    this.setState({ transactions: [...this.state.transactions, transaction]})
  }



  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
