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

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (obj) => {
		fetch("http://localhost:6001/transactions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				amount: obj.amount,
				date: obj.date,
				category: obj.category,
				description: obj.description,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ transactions: data });
			});
	};
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
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default App;
