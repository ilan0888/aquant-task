import {connect} from "react-redux";
import UserInput from "../../../Components/HomePage/UserInput";
import {addCoordinate} from './actions';
import toJS from "../../../hoc/toJS";
import {getCoordinates} from "../Map/selectors";

const mapStateToProps = (state) => {
    return {
        coordinates: getCoordinates(state)
    }};


const mapDispatchToProps = (dispatch) => {
    return {
        addCoordinate: (coordinate) => dispatch(addCoordinate(coordinate)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(UserInput))