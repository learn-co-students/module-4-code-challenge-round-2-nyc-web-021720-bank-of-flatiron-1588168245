import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: []
    }
  }


  componentDidMount = () => {
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(transactions => 
      this.setState ({
        transactions: transactions
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
        transactions: [...this.state.transactions, response]
      })
    )
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
