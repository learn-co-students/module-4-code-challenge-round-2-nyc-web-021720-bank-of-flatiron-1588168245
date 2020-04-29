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
    console.log(this.state)
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm />
        <TransactionsList display={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
