import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleSearch}
      /> 
      
      <i className="circular search link icon"></i>

      <div>
        <select>
          <option value="Category" onChange={props.handleSort}>Category</option>
          <option value="Description"onChange={props.handleSort}>Description</option>
        </select>
      </div>

    </div>



  );
};

export default Search;
