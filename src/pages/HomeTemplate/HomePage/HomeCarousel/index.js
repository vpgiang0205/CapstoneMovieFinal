import React from 'react'
import Carousel from 'react-multi-carousel';

export default function HomeCarousel() {
  const responsive = {
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
    <section>
      <Carousel responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000} infinite={true}>
        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" alt="First slide" />
        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" alt="Second slide" />
        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png" alt="Third slide" />
      </Carousel>

    </section>
  );
}
