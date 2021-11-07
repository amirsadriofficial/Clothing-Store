import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from '../images/icons/logo.png'

const Header = () => {
  return (
    <>
      <div id="top-bar">
        <div className="container">
          <div>Free shipping for standard order over $100</div>
          <div>
            <a href="#/">Help & FAQs</a>
            <a href="#/">My Account</a>
            <a href="#/">EN</a>
            <a href="#/">USD</a>
          </div>
        </div>
      </div>
      <nav
        id="navbar"
        className="container navbar navbar-expand-md navbar-light"
      >
        <div className="container">
          <a href="#/" className="navbar-brand">
            <img
              src={Logo}
              alt=""
              style={{
                height: '40px',
                width: '120px',
              }}
            />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <button type="button" className="nav-link-button">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  <button type="button" className="nav-link-button">
                    Shop
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <button type="button" className="nav-link-button">
                    About
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <button type="button" className="nav-link-button">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
            <div>
              <form className="form-inline d-flex me-3">
                <button type="button" className="btn btn-outline-primary">
                  Search
                </button>
                <input
                  type="text"
                  className="form-control ml-2"
                  placeholder="Search ..."
                />
              </form>
              <a href="#/">
                <MdShoppingCart size={30} className="me-3" />
              </a>
              <a href="#/">
                <FiHeart size={30} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
