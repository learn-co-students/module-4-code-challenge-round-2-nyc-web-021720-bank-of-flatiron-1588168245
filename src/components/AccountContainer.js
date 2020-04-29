import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const bankUrl = 'http://localhost:6001/transactions'
class AccountContainer extends Component {
  state = {
    transactions: [],
    newTransaction: {}
  }

  componentDidMount(){
    fetch(bankUrl)
    .then(res => res.json())
    .then(data => this.setState({ transactions: data}))
  }

  addTransaction = (newTransaction)=>{
    this.setState({transactions: [...this.state.transactions,newTransaction ]})
  }
  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
