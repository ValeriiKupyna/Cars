import { connect } from 'react-redux';
import { CarTable } from "./car-table";

const mapStateToProps = ({ cars }) => ({
    cars: cars.cars
})

export default connect(mapStateToProps)(CarTable);
