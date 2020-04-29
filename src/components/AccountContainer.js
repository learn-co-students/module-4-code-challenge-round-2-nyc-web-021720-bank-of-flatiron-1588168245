import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

 let URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      dataInfo: [],
      transactions: [],
      searchForm: '' //clears the field 
    }
  }

  //render dataInfo using fetch. Should use DidMount

    componentDidMount() {
      fetch(URL)
      console.log(URL)
      .then(response => response.json())
      .then(results => this.setState({
        dataInfo: results,
        transactions: results
      }))
    }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList />
      </div>
    );
  }
}

export default AccountContainer;
