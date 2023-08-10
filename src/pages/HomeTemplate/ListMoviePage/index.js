import React, { useEffect } from 'react'
import { actListMovie } from './duck/action'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from './MovieItem'

export default function ListMoviePage() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.listMovieReducer.data)

  useEffect(() => {
    dispatch(actListMovie())
  }, [])

  const renderListMovie = () => {
    if (data) {
      return data?.map((item, index) => {
        return <MovieItem key={index} movie={item} />
      })
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        {renderListMovie()}
      </div>
    </div>
  )
}
