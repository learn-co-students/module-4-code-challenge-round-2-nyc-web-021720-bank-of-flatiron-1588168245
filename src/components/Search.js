import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <div>
        <label>
        <input type="radio" value="Description" onChange={(e) => props.handleSort(e)}/>
        Description
        </label>
        <label>
        <input type="radio" value="Category" onChange={(e) => props.handleSort(e)}/>
        Category
        </label>
      </div>
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => props.handleSearch(e)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
