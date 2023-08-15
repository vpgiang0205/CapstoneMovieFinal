import React, { useEffect } from 'react'
import HomeCarouselItem from './HomeCarouselItem'
import HomeMovieItem from './HomeMovieItem'
import HomeListTheater from './HomeListTheater'
import { actListMovie } from '../ListMoviePage/duck/action'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { actCarousel, actTheater, actTheaterAdress } from './duck/actions'
import Carousel from 'react-multi-carousel';


export default function HomePage() {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.listMovieReducer.data)
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
        <HomeCarouselItem key={index} image={item} />
      ));
    }
  }

  const renderHomeListMovie = () => {
    if (data) {
      return data.map((item, index) => {
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
      <div className='home-carousel'>
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
      </div>

      <div className=''>
        {data && (<Carousel
          responsive={listMovieResponsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
        >
          {renderHomeListMovie()}
        </Carousel>)}
      </div>

      <div className='row'>
        <div className='container'>
          {theaterData && (renderHomeListTheater())}
        </div>
      </div>
    </div>
  )
}