import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    newTransaction: {}
  }

  componentDidMount(){
  fetch('http://localhost:6001/transactions')
  .then(res => res.json())
  .then(transactions => this.setState({transactions}))
  }

  handlePost() {
  fetch('http://localhost:6001/transactions', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      Accept: 'application.json'
    },
    body: JSON.stringify({...this.state.newTransaction})
  })
  .then(res => res.json())
  .then(newTransaction => this.setState({tansactions: [...this.state.transactions, newTransaction]}))
  }

  handleFormChange = (e) => {this.setState({newTransaction:})}

  render() {
    
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} handlePost={this.handlePost}/>
      </div>
    );
  }
}

export default App;
