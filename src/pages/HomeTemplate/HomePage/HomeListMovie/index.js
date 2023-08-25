import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.css";
import { Link } from "react-router-dom";

const HomeListMovie = (props) => {
  const { listMovie } = props;

  const listComingSoonMovie = listMovie.filter(movie => movie.sapChieu);

  const listMovieResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10, // Display 5 items in a row
      partialVisibilityGutter: 40, // Adjust gutter for partial visibility
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7, // Display 5 items in a row
      partialVisibilityGutter: 40, // Adjust gutter for partial visibility
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5, // Display 5 items in a row
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3, // Display 2 items in a row
    },
  };


  function trimText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  const renderListMovie = () => {
    return listMovie?.map((movie, index) => {
      return (
        <div className="card text-center mx-2" key={index}>
          <div className="card-overlay-container"></div>
          <img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} />
          <div className="card-body d-flex flex-column">
            <div className="text-center card-details">
              <Link to={`/detail-page/${movie.maPhim}`}>
                <h5 className="card-title">{movie.tenPhim}</h5>
                <p className="card-text">{trimText(movie.moTa, 150)}</p>
              </Link>
            </div>
            <div className="mt-3">
              <Link to={`/detail-page/${movie.maPhim}`} className="btn btn-danger">
                Detail
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderListComingSoonMovie = () => {
    return listComingSoonMovie?.map((movieSoon, index) => {
      return (
        <div className="card text-center mx-2" key={index}>
          <div className="card-overlay-container"></div>
          <img className="card-img-top" src={movieSoon.hinhAnh} alt={movieSoon.tenPhim} />
          <div className="card-body d-flex flex-column">
            <div className="text-center card-details">
              <Link to={`/detail-page/${movieSoon.maPhim}`}>
                <h5 className="card-title">{movieSoon.tenPhim}</h5>
                <p className="card-text">{trimText(movieSoon.moTa, 150)}</p>
              </Link>
            </div>
            <div className="mt-3">
              <Link to={`/detail-page/${movieSoon.maPhim}`} className="btn btn-danger">
                Detail
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="list-movie">
      <div className="row list-comingsoon-movie my-5">
        <div className='my-3 title text-danger'>
          <h2>DANH SÁCH CÁC PHIM SẮP CHIẾU</h2>
        </div>
        <Carousel responsive={listMovieResponsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          className="container-fluid"
          >
          {renderListComingSoonMovie()}
        </Carousel>
      </div>

      <div className="row list-movie">
        <div className='my-3 title text-danger'>
          <h2>DANH SÁCH CÁC PHIM</h2>
        </div>
        <Carousel responsive={listMovieResponsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          className="container-fluid"
        >{renderListMovie()}
        </Carousel>
      </div>

    </div>
  );
};

export default HomeListMovie;
