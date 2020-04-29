import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] })
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {

    return (
      <div className="ui segment" >
        <form onSubmit={e => this.handleSubmit(e)} className="ui form">
          <div className="inline fields">
            <input onChange={e => this.handleChange(e)} type="date" name="date" />
            <input onChange={e => this.handleChange(e)} type="text" name="description" placeholder="Description" />
            <input onChange={e => this.handleChange(e)} type="text" name="category" placeholder="Category" />
            <input onChange={e => this.handleChange(e)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
