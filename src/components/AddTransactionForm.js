import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    const {handleChange,date,description,category,amount}=this.props
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={null}>
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={handleChange} />
            <input type="text" name="description" value={description} onChange={handleChange} placeholder="Description" />
            <input type="text" name="category" value={category} onChange={handleChange} placeholder="Category" />
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={handleChange}
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
