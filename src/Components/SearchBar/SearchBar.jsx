import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import './SearchBar.css';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState({ results: [] });

  const getMovieData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=401680f478b99cd7647e23dc7d967d1f`
      );
      setData(response.data);
      console.log(data.results[0].poster_path)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (input) {
      getMovieData();
      console.log(data);
    }
  }, [input]);

  return (
    <div className="search-bar">
      <div className="search-bar-details">
        <h1 className="search-head">Search Your Favorite Movies Here!!</h1>
        <input
          type="search"
          placeholder="Search.."
          className="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="movie-list">
        {
          data.results.map((movie, index) => {
            return (
              <MovieCard movieDetails={movie} />
            )
          })
        }
      </div>
    </div>
  );
};

export default SearchBar;
