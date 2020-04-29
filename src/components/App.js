import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
	state = {
		transactions: [],
		amount: "",
		category: "",
		description: "",
		date: "",
	};

	componentDidMount() {
		fetch("http://localhost:6001/transactions")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					transactions: data,
				});
			});
	}

	handleChange = (e) => {};

	handleForm = () => {};
	render() {
		return (
			<div className="ui raised segment">
				<div className="ui segment violet inverted">
					<h2>The Royal Bank of Flatiron</h2>
				</div>
				<AccountContainer
					transactions={this.state.transactions}
					amount={this.state.amount}
					date={this.state.date}
					category={this.state.category}
					description={this.state.description}
					handleChange={this.handleChange}
					handleForm={this.handleForm}
				/>
			</div>
		);
	}
}

export default App;
