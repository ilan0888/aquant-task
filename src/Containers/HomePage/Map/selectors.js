import {createSelector} from 'reselect';

const getReducer = state => state.get('MapReducer');

export const getCoordinates = createSelector(
    getReducer,
    reducer => reducer.get('coordinates')

);
