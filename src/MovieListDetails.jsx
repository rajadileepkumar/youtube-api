import React, { Component } from 'react'

export default class MovieListDetails extends Component {
    render() {
        const { movieDetails } = this.props;
        return (
            <>
                <ul className="movie-list">
                    {movieDetails.map(movie => 
                        <li id={`movie`+movie.imdbID+movie.Title} key={`movie`+movie.Year+movie.imdbID+movie.Title}>
                            <div className="movie-card-image">
                                <img src={movie.Poster === 'N/A' ? `http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg` : movie.Poster} alt={movie.Title} />
                            </div>
                            <div className="movie-card-body">
                                <h6 className="movie-card-title">{movie.Title}</h6>
                                <div className="movie-card-details">
                                    <div className="movie-card-year">
                                        <p>Year</p>
                                        <p className="movie-card-movie">{movie.Type}</p>
                                    </div>
                                    <div className="movie-card-type">
                                        <p>Type</p>
                                        <p className="movie-card-year">{movie.Year}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </>
        )
    }
}
