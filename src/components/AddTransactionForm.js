import React, { Component } from "react";

class AddTransactionForm extends Component {

  constructor() {
    super()

    this.state = {
      date: '',
      description: '',
      category: '',
      amount: ''
    }
  }

  handleChange = (type, event) => {
    this.setState({
      [type]: event.target.value
    })
  }



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.props.handleSubmit(e,
            this.state.date, this.state.description, this.state.category, this.state.amount)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={(event) => this.handleChange('date', event)}/>
            <input type="text" name="description" placeholder="Description" 
            onChange={(event) => this.handleChange('description', event)}/>
            <input type="text" name="category" placeholder="Category" 
            onChange={(event) => this.handleChange('category', event)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(event) => this.handleChange('amount', event)}
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
