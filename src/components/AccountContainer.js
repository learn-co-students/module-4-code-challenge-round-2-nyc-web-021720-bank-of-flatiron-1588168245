import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions:[],
    search:""
  }

handleSearch=(e)=>{
  this.setState({
    search: e.target.value
  },()=>console.log(this.state.search))
}


handleChange=(e)=>{
  this.setState({
    [e.target.name]: e.target.value
  })
} 

handleSubmit=(e)=>{
  e.preventDefault()
  fetch('http://localhost:6001/transactions',{
    method: "POST",
    headers: {
      "content-type":"application/json",
      accept:"application/json"
    },
    body: JSON.stringify(
      {
        date:e.target.date.value,
        description:e.target.description.value,
        category:e.target.category.value,
        amount: e.target.amount.value
      }
    )
  })
  .then(resp => resp.json())
  .then(newTran=> this.setState({
    transactions: [...this.state.transactions,newTran]
  }))

}

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp=>resp.json())
    .then(data => this.setState({
        transactions:data
    }))
  }
  render() {
    // console.log(this.state)
const {date, description, category, amount}=this.state
    return (
      <div>
        <Search handleSearch={this.handleSearch} search={description}/>
        <AddTransactionForm  
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange} 
        date={date} description={description} 
        category={category} amount={amount} />
        <TransactionsList display={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
