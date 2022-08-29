import { Link } from "react-router-dom";

const Search = ({ handleChange, handleSearch,defaultColor}) => {
  return (
    <>
      <div className="search-wrapper">
        <form className="search-form" onSubmit={handleSearch}>
          <input  onChange={handleChange} type="text" placeholder="Search by category or city" />
          <button className={`search-form-button ${defaultColor}`} type="submit">
            Search
          </button>
          
        </form>
      </div>
    </>
  );
};

export default Search;