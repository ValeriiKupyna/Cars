import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../search';
import './header.css';

export const Header = ({ onSearch = () => { }, error }) => {
    const onChange = (str) => str.toUpperCase();

    return (
        <nav className="navbar bg-primary">
            <Link className="text-white" to="/">Cars</Link>

            <div className="header__search-block mb-3 mt-3">
                <Search placeholder={'AA9999AI'}
                    onChange={onChange}
                    onSubmit={onSearch} />
                <div className={`header__error`} role="alert">{error}</div>
            </div>
        </nav>
    )
}

Header.PropType = {
    onChange: PropTypes.func,
    error: PropTypes.object
}
