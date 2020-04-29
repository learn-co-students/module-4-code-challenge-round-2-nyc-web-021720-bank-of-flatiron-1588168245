import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions:[],
    searchWord:"",
    desc:false,
    cat:false
  }
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res=>res.json())
    .then(data=>this.setState({transactions:data}))
  }
  onSubmit=(e)=>{
    e.preventDefault()
    fetch("http://localhost:6001/transactions",{
      method:"POST",
      headers:{
        'content-type':'application/json',
        Accept:'application/json'
      },body:JSON.stringify({
        date:e.target.date.value,
        description:e.target.description.value,
        category:e.target.category.value,
        amount:parseInt(e.target.amount.value)
      })
    })
    .then(res=>res.json())
    .then(data=>this.setState({transactions:[...this.state.transactions,data]}))
  }
  handleSearch= e =>{
    this.setState({searchWord:e.target.value})
  }

  handleDesc=e=>{
    console.log(this.state.desc)
    this.state.desc === false ? this.setState({desc:true}):this.setState({desc:false})
  }

  handleCat=e=>{
    this.state.cat === false ? this.setState({cat:true}):this.setState({cat:false})
  }
  render() {
    let displayTransactions = this.state.searchWord==="" ? [...this.state.transactions]: this.state.transactions.filter(transaction=>transaction.description===this.state.searchWord)

    displayTransactions= this.state.desc === true ?  displayTransactions.sort((transaction1,transaction2)=>transaction1.description.localeCompare(transaction2.description)): displayTransactions

    displayTransactions= this.state.cat === true ?  displayTransactions.sort((transaction1,transaction2)=>transaction1.category.localeCompare(transaction2.category)): displayTransactions
   
    return (
      <div>
        <Search handleSearch={this.handleSearch} searchWord={this.state.searchWord}/>
        <AddTransactionForm onSubmit={this.onSubmit}/>
        <TransactionsList handleCat={this.handleCat} handleDesc={this.handleDesc} transactions={displayTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
