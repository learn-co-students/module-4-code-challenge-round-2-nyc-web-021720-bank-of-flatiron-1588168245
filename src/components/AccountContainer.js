import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions:[]
  }
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res=>res.json())
    .then(data=>this.setState({transactions:data}))
  }
  onSubmit=(e)=>{
    e.prevent.default()
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
  render() {
    
    return (
      <div>
        <Search />
        <AddTransactionForm onSubmit={this.onSubmit}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
