import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

//Base url for db
const BASE_URL = "http://localhost:6001/transactions";

class AccountContainer extends Component {
  state = {
    transactions: [],
    newDate: "",
    newDescription: "",
    newCategory: "",
  };

  //Fetches transactions and setState to state.transactions
  componentDidMount() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((parsedTransactions) => {
        this.setState({
          transactions: parsedTransactions,
        });
      });
  }
  onFormSubmit = (e) => {
    e.preventDefaultValue();
    const obj = {
      date: this.state.newDate,
      description: this.state.newDescription,
      category: this.newCategory,
    };
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((newTransaction) => {
        this.setState({
          transactions: [...this.state.transactions, newTransaction],
        });
      });
  };

  onFormChange = (e) => {
    console.log(e.target.name);
    // let name = e.target.name
    // let val = e.target.value
    // this.setState({ e.target.name: val})
  };

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm
          onSubmit={this.onSubmit}
          onFormChange={this.onFormChange}
          newDate={this.state.newDate}
          newDescription={this.state.newDescription}
          newCategory={this.newCategory}
        />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
