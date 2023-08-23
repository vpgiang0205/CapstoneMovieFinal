import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function HomeCarousel(props) {
  const { image } = props;
  
  return (
    <Link to={`/detail-page/${image.maPhim}`}>
      <img className="homeCarousel-img " src={image.hinhAnh} alt={image.tenPhim} />
    </Link>
  );
}
