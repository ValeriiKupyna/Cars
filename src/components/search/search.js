import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        value: ""
    }

    componentDidMount() {
        const { value } = this.props;
        this.setState({ value });
    }

    onChange = (e) => {
        const { onChange } = this.props;
        const { value } = e.target;
        const currentValue = onChange ? onChange(value) : value;

        this.setState({ value: currentValue });
    }

    onSubmit = e => {
        if (e.keyCode === 13) {
            this.props.onSubmit(this.state.value);
        }
    }

    render() {
        const {
            type = "text",
            placeholder,
        } = this.props;

        const { value } = this.state;

        return (
            <div className="input-group">
                <input className="form-control"
                    type={type}
                    placeholder={placeholder}
                    onChange={this.onChange}
                    onKeyDown={this.onSubmit}
                    value={value || ''} />
            </div>)
    }
}

Search.PropType = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
}
