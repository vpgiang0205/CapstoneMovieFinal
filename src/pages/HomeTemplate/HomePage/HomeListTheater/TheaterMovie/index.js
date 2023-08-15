import React, { useEffect } from 'react'
import { actTheaterMovie } from '../../duck/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function TheaterMovie(props) {
    const { id } = props;
    const dispatch = useDispatch()
    const movieData = useSelector((state) => state.theaterMovieReducer.data)

    useEffect(() => {
        dispatch(actTheaterMovie(id))
    }, [])

    const renderTheaterMovie = () => {
        console.log(movieData);
    }

    return (
        <div>
            {renderTheaterMovie()}
        </div>
    )
}
