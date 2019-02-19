import React from 'react';
import PropTypes from 'prop-types';

import CarTable from './components/car-table';

export const Home = ({ isShowTable }) => {
    return (
        isShowTable
            ?
            <CarTable />
            :
            (
                <div className="alert alert-primary" role="alert">
                    Enter the car number and press enter
                </div>
            )
    )
}

Home.props = {
    isShowTable: PropTypes.bool.isRequired
}