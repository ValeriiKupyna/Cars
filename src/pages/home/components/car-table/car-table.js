import React, { Component, Fragment } from 'react';
import Table from '../../../../components/table';
import PropTypes from 'prop-types';

const CARS_TABLE_HEADER = {
    owner: 'Owner',
    year: 'Year',
    crashesCount: 'Crashes Count',
    ownersCount: 'Owners Count',
}

export class CarTable extends Component {

    render() {
        const {
            cars
        } = this.props;

        return (
            <Table items={[{...cars, id: 1}]} headers={CARS_TABLE_HEADER} >
                {(item) => {
                    const { owner, year, crashesCount, ownersCount } = item;
                    return (
                        <Fragment>
                            <td>{owner}</td>
                            <td>{year}</td>
                            <td>{crashesCount}</td>
                            <td>{ownersCount}</td>
                        </Fragment>
                    )
                }}
            </Table>
        )
    }
}


const {
    number,
    string,
    shape,
    arrayOf
} = PropTypes;

CarTable.props = {
    cars: arrayOf(
        shape({
            owner: string,
            year: number,
            crashesCount: number,
            ownersCount: number
        })
    )
}
