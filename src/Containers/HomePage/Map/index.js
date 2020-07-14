import {connect} from "react-redux";
import Map from "../../../Components/HomePage/Map";
import {getCoordinates} from './selectors';
import toJS from "../../../hoc/toJS";

const mapStateToProps = (state) => {
    return {
        coordinates: getCoordinates(state)
    }};


export default connect(mapStateToProps, null)(toJS(Map))