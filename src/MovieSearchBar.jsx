import React, { Component } from 'react'
import TextInputComponent from './TextInputComponent';

export default class MovieSearchBar extends Component {
  render() {
    return (
      <>
        <TextInputComponent  type={'Movie'}/>
      </>
    )
  }
}
