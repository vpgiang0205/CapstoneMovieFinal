import React, { useEffect, useState } from 'react'
import HomeCarousel from './HomeCarousel'
import HomeListTheater from './HomeListTheater'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { actCarousel, actTheater, actListMovie } from 'redux/types/_actions'
import Carousel from 'react-multi-carousel';
import HomeListMovie from './HomeListMovie'


export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actListMovie())
    dispatch(actCarousel())
    dispatch(actTheater())

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  const carouselData = useSelector((state) => state.carouselReducer.data)
  const movieData = useSelector((state) => state.listMovieReducer.data)
  const theaterData = useSelector((state) => state.theaterReducer.data)


  const renderHomeCarousel = () => {
    return carouselData.map((item, index) => (
      <HomeCarousel key={index} image={item} />
    ));
  }

  const renderHomeListMovie = () => {
    return <>
      <HomeListMovie listMovie={movieData} />
    </>

  }

  const renderHomeListTheater = () => {
    return <HomeListTheater data={theaterData} />
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

  return (
    <div className='py-3'>
      {carouselData && (
        <Carousel
          responsive={bannerResponsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          className={`custom-fixed ${scrollPosition > 50 ? 'hide-content ' : ''}`}
        >
          {renderHomeCarousel()}
        </Carousel>
      )}

      <main className={`main ${scrollPosition > 50 ? ' dark-bg' : ''} `}>
        <section id='section__ListMovie' className='container-fluid'>
          {movieData && (renderHomeListMovie())}

        </section>
        <section id='section__ListTheater'>
          {theaterData && (renderHomeListTheater())}
        </section>
      </main>

    </div>
  )
}