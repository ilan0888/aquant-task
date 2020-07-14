import {ADD_COORDINATE} from './consts';

export function addCoordinate(coordinate) {
    return{
        type: ADD_COORDINATE,
        coordinate
    }
}