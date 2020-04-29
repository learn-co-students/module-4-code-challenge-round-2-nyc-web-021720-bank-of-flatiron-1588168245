import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      search: '',
    }
  }


  componentDidMount = () => {
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(transactions => 
      this.setState ({
        transactions: transactions,
    })
    )
  }

  handleSubmit = (event, date, description, category, amount) => {
    event.preventDefault()
    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    })
    .then(r => r.json())
    .then(response => 
      this.setState({
        transactions: [...this.state.transactions, response],
      })
    )
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSort = (event) => {
    console.log(event.target.value)
  }

  render() {
    let displayedTransactions = this.state.transactions.filter(s => 
      s.description.toLowerCase().includes(this.state.search))
    return (
      <div>
        <Search handleSearch={this.handleSearch} handleSort={this.handleSort}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={displayedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
