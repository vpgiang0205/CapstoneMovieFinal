import { combineReducers } from 'redux'
import listMovieReducer from 'pages/HomeTemplate/ListMoviePage/duck/reducer';

const rootReducer = combineReducers(
    {
        // Child Reducer
        listMovieReducer,
    }
);

export default rootReducer