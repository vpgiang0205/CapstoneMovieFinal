import React, { useEffect } from 'react'
import { actListMovie } from './duck/action'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from './MovieItem'
import Loader from '../_components/Loader'

export default function ListMoviePage() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.listMovieReducer.data)
  const loading = useSelector((state) => state.listMovieReducer.loading)

  useEffect(() => {
    dispatch(actListMovie())
  }, [])
  
  if (loading) {
    return <> <Loader /></>
  }

  const renderListMovie = () => {
    if (data) {
      return data?.map((item, index) => {
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
