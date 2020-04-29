import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    trans:[],
   
    date: '',
    description: '',
    category: '',
    amount: 0,

    searchTerm: ''

  }

  handleSearchChange = (event) =>{
    this.setState({
      searchTerm: event.target.value

    })
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    
    let transaction = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }

    let reqObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(transaction)
  }

    fetch('http://localhost:6001/transactions',reqObj)
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        trans: [...this.state.trans, data]
      })
    })

  }
  
  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        trans: data
      })
    })
  }



  render() {

    let dataSearch = this.state.trans.filter( s => s.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <Search 
        searchTerm={this.state.searchTerm}
        handleSearchChange= {this.handleSearchChange}
         />
        <AddTransactionForm 
        handleChange={this.handleChange}
        date={this.state.date}
        description={this.state.description}
        category ={this.state.category}
        amount = {this.state.amount}
        handleSubmit = {this.handleSubmit}

        />
        <TransactionsList trans={dataSearch}/>
      </div>
    );
  }
}

export default AccountContainer;
