import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchTransaction}
        onChange={ props.handleSearchChange}
      />
      <i className="circular search link icon" onClick={props.filteredTransactions}></i>
    </div>
  );
};

export default Search;
