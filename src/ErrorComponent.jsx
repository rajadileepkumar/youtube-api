import React, { Component } from 'react'

export default class ErrorComponent extends Component {
    render() {
        const {error} = this.props;
        return (
            <div>
                {error}
            </div>
        )
    }
}
