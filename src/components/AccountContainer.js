import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions:[],
    searchWord:""
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
  render() {
    let displayTransactions = this.state.searchWord==="" ? this.state.transactions: this.state.transactions.filter(transaction=>transaction.description===this.state.searchWord)
    return (
      <div>
        <Search handleSearch={this.handleSearch} searchWord={this.state.searchWord}/>
        <AddTransactionForm onSubmit={this.onSubmit}/>
        <TransactionsList transactions={displayTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
