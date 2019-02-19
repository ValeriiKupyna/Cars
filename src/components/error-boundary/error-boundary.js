import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = {
        isError: false,
    }

    componentDidCatch() {
        this.setState({ isError: true })
    }
    render() {
        const { isError } = this.state;

        return isError ?
            <div className="alert alert-danger">Oops something wrong</div>
            : this.props.children
    }
}
