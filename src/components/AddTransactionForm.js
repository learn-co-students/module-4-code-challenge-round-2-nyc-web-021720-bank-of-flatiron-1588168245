import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={() => this.props.onSubmit} onChange={this.props.onFormChange} className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.props.newDate}/>
            <input type="text" name="description" placeholder="Description" value={this.props.newDescription}/>
            <input type="text" name="category" placeholder="Category" value={this.props.newCategory}/>
            <input
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
