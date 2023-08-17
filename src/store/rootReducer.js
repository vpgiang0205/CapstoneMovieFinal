import { combineReducers } from 'redux'
import listMovieReducer from 'pages/HomeTemplate/_duck/listMovieReducer';
import movieItemDetailReducer from 'pages/HomeTemplate/MovieItemDetail/duck/reducer';
import carouselReducer from 'pages/HomeTemplate/_duck/carouselReducer';
import theaterReducer from 'pages/HomeTemplate/_duck/theaterReducer';

const rootReducer = combineReducers(
    {
        // Child Reducer
        listMovieReducer,
        movieItemDetailReducer,
        theaterReducer,
        carouselReducer,
    }
);

export default rootReducer