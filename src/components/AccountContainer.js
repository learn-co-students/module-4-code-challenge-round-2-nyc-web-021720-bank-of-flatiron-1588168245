import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
	render() {
		return (
			<div>
				<Search />
				<AddTransactionForm
					transactions={this.props.transactions}
					handleSubmit={this.props.handleSubmit}
					handleChange={this.props.handleChange}
					date={this.props.date}
					amount={this.props.amount}
					category={this.props.category}
					description={this.props.description}
				/>
				<TransactionsList transactions={this.props.transactions} />
			</div>
		);
	}
}

export default AccountContainer;
