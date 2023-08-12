import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeListMovie from './HomeListMovie'
import HomeListTheater from './HomeListTheater'

export default function HomePage() {
  return (
    <div className='container-fluid'>
      <div className='row home-carousel'>
        <div className='w-100'>
          <HomeCarousel />
        </div>

      </div>
      <div className='row home-listMovie overflow'>
        <HomeListMovie />
      </div>

      <div className='row'>
        <div className='container'>
        
        <HomeListTheater />
        </div>
      </div>

    </div>
  )
}