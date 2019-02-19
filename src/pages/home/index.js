import { connect } from 'react-redux';
import { Home } from "./home";

const mapStateToProps = ({ cars }) => ({
    isShowTable: !!cars.searchNumber
})

export default connect(mapStateToProps)(Home);