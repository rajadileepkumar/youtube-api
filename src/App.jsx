import React, { Component } from 'react'
import SearchBar from './SearchBar';
import MovieSearchBar from './MovieSearchBar'
import './styles/index.scss'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    }
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <SearchBar />
        <MovieSearchBar />
      </div>
    )
  }
}
