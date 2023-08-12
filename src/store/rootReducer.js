import { combineReducers } from 'redux'
import listMovieReducer from 'pages/HomeTemplate/ListMoviePage/duck/reducer';
import movieItemDetailReducer from 'pages/HomeTemplate/MovieItemDetail/duck/reducer';
import theaterReducer from 'pages/HomeTemplate/ListTheaterPage/duck/reducer';

const rootReducer = combineReducers(
    {
        // Child Reducer
        listMovieReducer,
        movieItemDetailReducer,
        theaterReducer
    }
);

export default rootReducer