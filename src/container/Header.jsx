import React from 'react'
import Logo from '../images/logo.png'

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
        className="container navbar navbar-expand-md navbar-light mb-3"
      >
        <div className="container">
          <a href="#/" className="navbar-brand">
            <img
              src={Logo}
              alt=""
              style={{
                height: '50px',
                width: '100px',
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Contact
                </a>
              </li>
            </ul>

            <form className="form-inline d-flex mr-auto">
              <button type="button" className="btn btn-outline-primary">
                Search
              </button>
              <input
                type="text"
                className="form-control ml-2"
                placeholder="Search ..."
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
