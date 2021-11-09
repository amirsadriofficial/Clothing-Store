import React from 'react'
import bannerOne from '../images/banner/banner-01.jpg'
import bannerTwo from '../images/banner/banner-02.jpg'
import bannerThree from '../images/banner/banner-03.jpg'

const Home = () => {
  return (
    <>
      <section className="container my-5 d-flex flex-row justify-content-center align-item-center">
        <div className="d-flex flex-row p-4">
          <div className="d-flex flex-column justify-content-center align-item-center absoluteOne">
            <span>Womenn</span>
            <span>Spring 2018</span>
          </div>
          <img src={bannerOne} alt="Banner" id="bannerOne" />
        </div>
        <div className="d-flex flex-row p-4">
          <div className="d-flex flex-column justify-content-center align-item-center absoluteTwo">
            <span>Men</span>
            <span>Spring 2018</span>
          </div>
          <img src={bannerTwo} alt="Banner" id="bannerTwo" />
        </div>
        <div className="d-flex flex-row p-4">
          <div className="d-flex flex-column justify-content-center align-item-center absoluteThree">
            <span>Accessories</span>
            <span>New Trend</span>
          </div>
          <img src={bannerThree} alt="Banner" id="bannerThree" />
        </div>
      </section>
      <section className="container">
        <div>
          <h2>Product Overview</h2>
        </div>
      </section>
    </>
  )
}

// Home.propTypes = { settings: PropTypes.node.isRequired }

export default Home
