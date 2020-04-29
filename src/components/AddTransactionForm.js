import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  handleChange = (event)=>{
    console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
      .then(res=> res.json())
      .then(transaction=> this.props.addTransaction(transaction))
      .catch(error=> console.log(error))
      this.setState({date:'', description: '', category: '', amount: 0})
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} onChange={this.handleChange}
            />
          </div>
          <button className="ui button" type="submit" onClick={this.handleSubmit}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
