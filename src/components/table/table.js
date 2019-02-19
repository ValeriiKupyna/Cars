import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({ items = [], children = () => { }, headers = {} }) => {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {
                        Object.keys(headers).map(key => (
                            <th key={key}>{headers[key]}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => (<tr key={item.id}>{children(item)}</tr>))
                }
            </tbody>
        </table>
    )
}

const {
    array,
    object,
    func
} = PropTypes;

Table.propTypes = {
    items: array,
    headers: object,
    children: func
}
