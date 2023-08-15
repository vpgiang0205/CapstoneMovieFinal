import { combineReducers } from 'redux'
import listMovieReducer from 'pages/HomeTemplate/ListMoviePage/duck/reducer';
import movieItemDetailReducer from 'pages/HomeTemplate/MovieItemDetail/duck/reducer';
import carouselReducer from 'pages/HomeTemplate/HomePage/duck/carouselReducer';
import theaterReducer from 'pages/HomeTemplate/HomePage/duck/theaterReducer';
import theaterAddressReducer from 'pages/HomeTemplate/HomePage/duck/theaterAddressReducer';
import theaterMovieReducer from 'pages/HomeTemplate/HomePage/duck/theaterMovieReducer';

const rootReducer = combineReducers(
    {
        // Child Reducer
        listMovieReducer,
        movieItemDetailReducer,
        theaterReducer,
        theaterAddressReducer,
        theaterMovieReducer,
        carouselReducer,
    }
);

export default rootReducer