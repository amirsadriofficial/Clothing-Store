import React from 'react'
import Slider from 'react-slick'
// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'
import slideOne from '../images/root/slide-01.jpg'
import slideTwo from '../images/root/slide-02.jpg'
import slideThree from '../images/root/slide-03.jpg'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div>
        <img src={slideOne} alt="" className="slide-landing-page" />
        <img src={slideTwo} alt="" className="slide-landing-page" />
        <img src={slideThree} alt="" className="slide-landing-page" />
      </div>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Home
