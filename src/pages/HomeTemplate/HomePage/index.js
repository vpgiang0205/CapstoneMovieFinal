import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeListMovie from './HomeListMovie'

export default function HomePage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-7'>
          <HomeCarousel />
        </div>

        <div className='col-5'>
          <HomeListMovie />
        </div>
      </div>
    </div>
  )
}