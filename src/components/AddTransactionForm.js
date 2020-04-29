import React, { Component } from "react";

class AddTransactionForm extends Component {
  state={
    date:"",
    description:"",
    category:"",
    amount:""
  }
  onChange=e=>{
    console.log(e.target.value)
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    const{date,description,category,amount}=this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.onSubmit}>
          <div className="inline fields">
            <input type="date" onChange={this.onChange} name="date" value={date} />
            <input type="text" onChange={this.onChange} name="description" value={description} placeholder="Description" />
            <input type="text" onChange={this.onChange} name="category" value={category} placeholder="Category" />
            <input
              onChange={this.onChange}
              type="number"
              name="amount"
              value={amount}
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
