import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    date: '',
    

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

  render() {
    let transactions = this.state.transactions
    
    return (
      <div>
        <Search />
        <AddTransactionForm handleDate={this.handleDate} />
        <TransactionsList transactions={transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
