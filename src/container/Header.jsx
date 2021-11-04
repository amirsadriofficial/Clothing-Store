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
      <nav className="container navbar navbar-expand-md navbar-light mb-3">
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/">
                خانه
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                درباره ما
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                خدمات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                ارتباط با ما
              </a>
            </li>
          </ul>

          <form className="form-inline mr-auto">
            <input
              type="text"
              className="form-control ml-2"
              placeholder="جستحو ..."
            />
            <button type="button" className="btn btn-outline-success">
              جستجو
            </button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Header
