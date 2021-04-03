import React from "react";

const SearchMovies = () => {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input type="text" name="query" placeholder="i.e. Jurassic Park" className="input"/>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchMovies;
