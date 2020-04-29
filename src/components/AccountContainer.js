import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

//Base url for db
const BASE_URL ='http://localhost:6001/transactions'

class AccountContainer extends Component {
  state = {
    transactions: [],
      newDate: '',
      newDescription: '',
      newCategory: ''
  }
  
  //Fetches transactions and setState to state.transactions
  componentDidMount(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(parsedTransactions => {
      this.setState({
        transactions: parsedTransactions
      })
    })
  }  

  onFormChange = (e) =>{
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm onFormChange={this.onFormChange} newDate={this.state.newDate} newDescription={this.state.newDescription} newCategory={this.newCategory}/>
        <TransactionsList  transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
