import { Link } from "react-router-dom";

const Search = ({ handleChange, handleSearch }) => {
  return (
    <>
      <div className="search-wrapper">
        <form className="search-form" onSubmit={handleSearch}>
          <input  onChange={handleChange} type="text" />
          <button  type="submit">
            Search
          </button>
          
        </form>
      </div>
    </>
  );
};

export default Search;