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
      .then(response => response.json())
      .then(results => this.setState({
        dataInfo: results,
        transactions: results
      }))
    }

    handleChange = (event) => {
      const {dataInfo, searchForm} = this.state
      this.setsearchForm(event)

      const searchResults = dataInfo.filter(transaction => transaction.category.toLowerCase().includes(searchForm) || transaction.description.toLowerCase().includes(searchForm))
      this.setState({transactions: searchResults})
    }
  
    setsearchForm = (event) => {
      this.setState({searchForm: event.target.value.toLowerCase()})
    }

    

      render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
} 


export default AccountContainer;
