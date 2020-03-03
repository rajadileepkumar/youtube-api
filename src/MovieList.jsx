import React, { Component } from 'react';
import ErrorComponent from './ErrorComponent';
import MovieListDetails from './MovieListDetails';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  render() {
    const { movieList } = this.props;
    return (
      <>
        {movieList.Response ? <MovieListDetails movieDetails={movieList.Search}/> : <ErrorComponent error={movieList} />}
      </>
    );
  }
}
