import { combineReducers } from 'redux'
import listMovieReducer from 'pages/HomeTemplate/_duck/listMovieReducer';
import carouselReducer from 'pages/HomeTemplate/_duck/carouselReducer';
import theaterReducer from 'pages/HomeTemplate/_duck/theaterReducer';
import movieItemDetailReducer from 'pages/HomeTemplate/_duck/movieItemDetailReducer';

const rootReducer = combineReducers(
    {
        // Movie Reducer
        listMovieReducer,
        movieItemDetailReducer,
        
        // Home
        theaterReducer,
        carouselReducer,
    }
);

export default rootReducer