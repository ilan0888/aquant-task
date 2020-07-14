import {combineReducers} from "redux-immutable";
import { connectRouter } from 'connected-react-router/immutable'
import MapReducer from "../Containers/HomePage/reducer";

export default (history) => combineReducers({
    MapReducer,
    router: connectRouter(history)
});