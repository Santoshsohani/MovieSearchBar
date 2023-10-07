import React from 'react';
import "./MovieCard.css"
const MovieCard = ({ movieDetails }) => {
    const { id, title, poster_path, release_date} = movieDetails;

    return (
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <div>Movie Name : {title}</div>
                <div>Release Date : {release_date}</div>
            </div>
    );
};

export default MovieCard;
