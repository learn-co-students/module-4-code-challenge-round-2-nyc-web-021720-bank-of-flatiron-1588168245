import React, { Component } from "react";

class AddTransactionForm extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="ui segment">
				<form onSubmit={this.props.handleSubmit} className="ui form">
					<div className="inline fields">
						<input
							onChange={this.props.handleChange}
							type="date"
							name="date"
							value={this.props.date}
						/>
						<input
							onChange={this.props.handleChange}
							type="text"
							name="description"
							placeholder="Description"
							value={this.props.description}
						/>
						<input
							onChange={this.props.handleChange}
							type="text"
							name="category"
							placeholder="Category"
							value={this.props.category}
						/>
						<input
							onChange={this.props.handleChange}
							type="number"
							name="amount"
							placeholder="Amount"
							step="0.01"
							value={this.props.amount}
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
