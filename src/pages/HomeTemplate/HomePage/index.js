import React, { useEffect } from 'react'
import HomeCarousel from './HomeCarousel'
import HomeMovieItem from './HomeMovieItem'
import HomeListTheater from './HomeListTheater'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { actCarousel, actTheater, actListMovie } from 'redux/types/_actions'
import Carousel from 'react-multi-carousel';
import HomeBooking from './HomeBooking'

export default function HomePage() {

  const dispatch = useDispatch()
  const movieData = useSelector((state) => state.listMovieReducer.data)
  const carouselData = useSelector((state) => state.carouselReducer.data)
  const theaterData = useSelector((state) => state.theaterReducer.data)

  useEffect(() => {
    dispatch(actListMovie())
    dispatch(actCarousel())
    dispatch(actTheater())
  }, [])

  const renderHomeCarousel = () => {
    if (!carouselData) {
      return null
    }
    else {
      return carouselData.map((item, index) => (
        <HomeCarousel key={index} image={item} />
      ));
    }
  }

  const renderHomeListMovie = () => {
    if (movieData) {
      return movieData.map((item, index) => {
        return <HomeMovieItem key={index} movie={item} />
      })
    }
  }

  const renderHomeListTheater = () => {
    if (!theaterData) {
      return null
    }
    else {
      return <HomeListTheater data={theaterData} />
    }

  }

  const bannerResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const listMovieResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };


  return (
    <div className='py-5'>
      <section className='home-carousel' id='section__ListCarousel'>
        <div className=''>
          {carouselData && (
            <Carousel
              responsive={bannerResponsive}
              autoPlay={true}
              autoPlaySpeed={5000}
              infinite={true}
            >
              {renderHomeCarousel()}
            </Carousel>
          )}
        </div>
      </section>

      <section>
        <HomeBooking />
      </section>
      <section id='section__ListMovie'>
        {movieData && (<Carousel
          responsive={listMovieResponsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
        >
          {renderHomeListMovie()}
        </Carousel>)}
      </section>

      <section id='section__ListTheater' className='overflow'>
        <div className='container'>
          {theaterData && (renderHomeListTheater())}
        </div>
      </section>
    </div>
  )
}