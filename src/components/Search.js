import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={props.searchWord}
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {
          props.handleSearch(e)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
