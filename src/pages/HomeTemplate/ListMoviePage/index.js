import React from 'react'
import MovieItem from './MovieItem'

export default function ListMoviePage(props) {

  const {movieData} = props

  const renderListMovie = () => {
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
