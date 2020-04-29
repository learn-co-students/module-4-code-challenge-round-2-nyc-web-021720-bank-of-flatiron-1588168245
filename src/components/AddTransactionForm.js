import React, { Component } from "react";

class AddTransactionForm extends Component {
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.props.handleForm} className="ui form">
					<div className="inline fields">
						<input
							type="date"
							name="date"
							value={this.props.transactions.date}
						/>
						<input
							type="text"
							name="description"
							placeholder="Description"
							value={this.props.transactions.description}
						/>
						<input
							type="text"
							name="category"
							placeholder="Category"
							value={this.props.transactions.category}
						/>
						<input
							type="number"
							name="amount"
							placeholder="Amount"
							step="0.01"
							value={this.props.transactions.amount}
						/>
					</div>
					<button className="ui button" type="submit">
						Add Transaction
					</button>
				</form>
			</div>
		);
	}
}

export default AddTransactionForm;
