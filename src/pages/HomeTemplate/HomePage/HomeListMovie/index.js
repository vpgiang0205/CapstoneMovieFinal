import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.css";
import { Link } from "react-router-dom";

const HomeListMovie = (props) => {
  const { listMovie } = props;

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
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <Link to={`/detail-page/${movie.maPhim}`}>
                <h5 className="card-title">{movie.tenPhim}</h5>
                <p className="card-text">{trimText(movie.moTa, 150)}</p>
              </Link>
            </div>
            <div className="mt-auto">
              <Link to={`/detail-page/${movie.maPhim}`} className="btn btn-danger">
                Detail
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  

  return (
    <div className="list-movie my-3">
      <Carousel responsive={listMovieResponsive}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      >{renderListMovie()}</Carousel>
    </div>
  );
};

export default HomeListMovie;
