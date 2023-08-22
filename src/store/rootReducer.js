import { combineReducers } from 'redux'
import listMovieReducer from '../redux/Reducers/listMovieReducer';
import carouselReducer from '../redux/Reducers/carouselReducer';
import theaterReducer from '../redux/Reducers/theaterReducer';
import movieItemDetailReducer from '../redux/Reducers/movieItemDetailReducer';
import QuanLyDatVeReducer from 'redux/Reducers/bookingTicketReducer';
import authReducer from 'redux/Reducers/authReducer';
import registerReducer from 'redux/Reducers/registerReducer';
import seatReducer from 'redux/Reducers/seatReducer';

const rootReducer = combineReducers(
    {
        // Movie Reducer
        listMovieReducer,
        movieItemDetailReducer,
        QuanLyDatVeReducer,
        seatReducer,

        // Auth Login 
        authReducer,
        registerReducer,
        
        // Home
        carouselReducer,
        theaterReducer,
    }
);

export default rootReducer