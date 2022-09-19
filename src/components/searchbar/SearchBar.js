import React from "react";

const SearchBar = ({...props}) => {
  return (
    <div className="searchbar">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />

<form action="">

  <input  {...props} type="search"  required />
  <i className="fa fa-search"></i>
</form>
    </div>
  );
};

export default SearchBar;
