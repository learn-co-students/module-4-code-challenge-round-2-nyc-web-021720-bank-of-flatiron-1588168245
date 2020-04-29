import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: [],
    search: null,
    date: null,
    description: null,
    category: null,
    amount: 0
  }

  //gets the transactions
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then(resp => resp.json())
      .then(data => this.setState({ transactions: data }))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] })
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)

    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: { "content-type": "application/json", "accept": "application/json" },
      body: JSON.stringify({
        "date": this.state.date[0],
        "description": this.state.description[0],
        "category": this.state.category[0],
        "amount": this.state.amount[0]
      })
    })
      .then(resp => resp.json())
      .then(data => this.setState({ transactions: [...this.state.transactions, data] }))
  }

  render() {

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer handleSubmit={this.handleSubmit} handleChange={this.handleChange} transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
