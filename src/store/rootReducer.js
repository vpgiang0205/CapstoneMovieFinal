import { combineReducers } from 'redux'
import listMovieReducer from '../redux/Reducers/listMovieReducer';
import carouselReducer from '../redux/Reducers/carouselReducer';
import theaterReducer from '../redux/Reducers/theaterReducer';
import movieItemDetailReducer from '../redux/Reducers/movieItemDetailReducer';
import QuanLyDatVeReducer from 'redux/Reducers/bookingTicketReducer';
import authReducer from 'redux/Reducers/authReducer';
const rootReducer = combineReducers(
    {
        // Movie Reducer
        listMovieReducer,
        movieItemDetailReducer,
        QuanLyDatVeReducer,

        // Auth Login 
        authReducer,

        // Home
        carouselReducer,
        theaterReducer,
    }
);

export default rootReducer