import React, { useEffect } from 'react'
import MovieItem from './MovieItem'
import { useDispatch, useSelector } from 'react-redux'
import { actListMovie } from '../../../redux/types/_actions';

export default function ListMoviePage() {

  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.listMovieReducer.data)

  useEffect(() => {
    dispatch(actListMovie())
  })

  const renderListMovie = () => {
console.log(movieData);
    if (movieData) {
      return movieData?.map((item, index) => {
        
        return <MovieItem key={index} movie={item} />
      })
    }

  }

  return (
    <section className='container'>
      <div className='row'>
        {renderListMovie()}
      </div>
    </section>
  )
}
