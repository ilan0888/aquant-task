import {fromJS} from "immutable";
import {ADD_COORDINATE} from './UserInput/consts';

const initialState = fromJS(
        {
            coordinates: []
        }
    );

export default function MapReducer(state = initialState, action){
    switch (action.type) {
        case ADD_COORDINATE:
            return state.set('coordinates', fromJS(state.get('coordinates').push(action.coordinate)));
        default:
            return state
    }
}