import React, { Component } from "react";

class AddTransactionForm extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange} value={this.add}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value={this.props.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} value={this.props.catagory}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange()} 
              value={this.props.amount}
            />
          </div>
          <button className="ui button" type="submit" onClick={() => this.clickHandle()}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
