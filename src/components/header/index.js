import { connect } from 'react-redux';
import { Header } from "./header";
import { getCars, setCarSearchNumber } from "../../store/actions/cars";

const mapStateToProps = ({ cars }) => ({
    error: cars.error
})

const mapDispatchToProps = dispatch => () => ({
    onSearch: (id) => {
        dispatch(getCars(id));
        dispatch(setCarSearchNumber(id));

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);