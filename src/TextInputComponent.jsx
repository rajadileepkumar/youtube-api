import React, { Component } from 'react'
import axios from 'axios';
import VideoList from './VideoList'
import MovieList from './MovieList'
export default class TextInputComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            resultPerPage:Number,
            totalResults:Number
        }
    }
    handleChange = (event) => {
        if(event.key === 'Enter'){
            if(this.props.type === 'Movie'){
                console.log('object')
                axios.get('https://www.omdbapi.com/?&s='+event.target.value+'&plot=full&apikey=####')
                .then(response => {
                    if(response && response.data.Search){
                        this.setState({
                            items: response.data,
                        });
                    } else {
                        this.setState({
                            items: response.data.Error,
                        });
                    }
                })
            } else{
                axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+event.target.value+'&type=video&videoDefinition=high&maxResults=3&key=########')
                .then(response => {
                    if(response){
                        this.setState({
                        items: response.data.items,
                        resultPerPage:response.data.pageInfo.resultsPerPage,
                        totalResults:response.data.pageInfo.totalResults
                        })
                    }
                })
            }
        }
    }
    render() {
        const {type} = this.props;
        return (
            <React.Fragment>
                <h1 className="p-all-10 m-top-0 m-top-20 m-bottom-20 heading">
                    {type === 'Movie'?'Search Movie Details From IDMB':'Search Song From Youtube'}
                </h1>
                <div className="ui-form">
                    <input type="text" name='video-search' className="p-all-10" onKeyPress={this.handleChange} placeholder={type === 'Movie'?'Search Movie/movie, series, episode Details From IDMB':'Search Song From Youtube'} />
                </div>
                {type === 'Movie'?
                    <MovieList movieList={this.state.items} />:
                    <VideoList searchList={this.state.items} recordsPerPage={this.state.resultPerPage} totalRecords={this.state.totalResults} />
                }
            </React.Fragment>
        )
    }
}
