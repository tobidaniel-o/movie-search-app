import React from "react";

const SearchMovies = () => {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8afd d130b22be86a60cb4c3e8b56a739&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        className="input"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchMovies;
