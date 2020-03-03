import React, { Component } from 'react'

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Array.from({ length: 10 })
        };
    }
    render() {
        // eslint-disable-next-line no-unused-vars
        const {searchList,recordsPerPage,totalRecords} = this.props;
        return (
            <ul className="full-list">
                {searchList.map(list =>
                    <li key={list.etag}>
                        <iframe title={list.snippet.title} src={`https://www.youtube.com/embed/`+list.id.videoId} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <h6>{list.snippet.title}</h6>
                        <p>{list.snippet.description}</p>
                        <a href={`https://www.youtube.com/watch?v=`+list.id.videoId} target="_blank" rel="noopener noreferrer">Play More</a>
                    </li>
                )}
            </ul>
        )
    }
}
