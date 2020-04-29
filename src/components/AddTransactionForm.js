import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  componentDidUpdate = (event) => {
    event.preventDefault(event)
    fetch("http://localhost:6001/transactions", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
  

//   const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

  // fetchNewTransaction = event => {
  //   event.preventDefault()

  // }



  render() {
    // console.log(this.state.date.value)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
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
}


export default AddTransactionForm;
