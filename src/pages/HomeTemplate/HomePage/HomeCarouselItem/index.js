import React from 'react'
import './style.css'

export default function HomeCarouselItem(props) {
  const { image } = props
  return (
    <img className="homeCarousel-img"  src={image.hinhAnh} />
  );
}
