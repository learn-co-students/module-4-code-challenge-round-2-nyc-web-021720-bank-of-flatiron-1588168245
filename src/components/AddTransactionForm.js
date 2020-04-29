import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit} className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value = {this.props.date} onChange={this.props.handleChange} />
            <input type="text" name="description" value = {this.props.description} placeholder="Description" onChange={this.props.handleChange} />
            <input type="text" name="category" value = {this.props.category} placeholder="Category" onChange={this.props.handleChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value = {this.props.amount}      
              onChange={this.props.handleChange}
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
