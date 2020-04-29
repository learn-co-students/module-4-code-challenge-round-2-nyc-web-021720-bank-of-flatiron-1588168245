import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions:[],
    search: ""
  }

handleSearch=(e)=>{
  this.setState({
    search: e.target.value
  },()=>console.log(this.state.search))
}

addTransaction=(transaction)=>{
this.setState({
  transactions:[...this.state.transactions, transaction]
})
}

handleChange=(e)=>{
  this.setState({
    [e.target.name]: e.target.value
  })
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
const{date, description, category, amount}=this.state
    return (
      <div>
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <AddTransactionForm  handleChange={this.handleChange} 
        date={date} description={description} category={category} amount={amount} />
        <TransactionsList display={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
