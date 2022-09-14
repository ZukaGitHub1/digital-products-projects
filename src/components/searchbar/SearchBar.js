import React from "react";

const SearchBar = ({...props}) => {
  return (
    <div className="searchbar">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>

<form action="">

  <input  {...props} type="search"  required />
  <i className="fa fa-search"></i>
</form>
    </div>
  );
};

export default SearchBar;
