import React, { Component } from 'react'
import TextInputComponent from './TextInputComponent'

export default class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
               <TextInputComponent  type={'Youtube'} />
            </React.Fragment>
        )
    }
}
