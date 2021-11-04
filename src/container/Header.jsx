import React from 'react'

const Header = () => {
  return (
    <>
      <div id="top-bar" className="black">
        <div className="container">
          <div className="left-align">
            Free shipping for standard order over $100
          </div>
          <div className="right-align">
            <a href="#/">Help & FAQs</a>
            <a href="#/">My Account</a>
            <a href="#/">EN</a>
            <a href="#/">USD</a>
          </div>
        </div>
      </div>
      <div>
        <nav className="limiter-menu-desktop container">
          {/* <!-- Logo desktop -->		 */}
          <a href="#/" className="logo">
            <img src="./../../public/images/logo.png" alt="IMG-LOGO" />
          </a>
          {/* <!-- Menu desktop --> */}
          <div className="menu-desktop">
            <ul className="main-menu">
              <li className="active-menu">
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/">Shop</a>
              </li>
              <li>
                <a href="#/">About</a>
              </li>
              <li>
                <a href="#/">Contact</a>
              </li>
            </ul>
          </div>
          {/* <!-- Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div>
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
              data-notify="2"
            >
              <i className="zmdi zmdi-shopping-cart" />
            </div>
            <a
              href="#/"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
              data-notify="0"
            >
              <i className="zmdi zmdi-favorite-outline" />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
