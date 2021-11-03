import React from 'react'

const Header = () => {
  return (
    // Start Header Desktop
    <div className="container-menu-desktop">
      {/* Start Topbar */}
      <div className="top-bar">
        <div className="content-topbar flex-sb-m h-full container">
          <div className="left-top-bar">
            Free shipping for standard order over $100
          </div>
          <div className="right-top-bar flex-w h-full">
            <a href="#/" className="flex-c-m trans-04 p-lr-25">
              Help & FAQs
            </a>
            <a href="#/" className="flex-c-m trans-04 p-lr-25">
              My Account
            </a>
            <a href="#/" className="flex-c-m trans-04 p-lr-25">
              EN
            </a>
            <a href="#/" className="flex-c-m trans-04 p-lr-25">
              USD
            </a>
          </div>
        </div>
      </div>
      {/* End Topbar */}
      <div className="wrap-menu-desktop">
        <nav className="limiter-menu-desktop container">
          {/* Start Logo desktop	 */}
          <a href="#/" className="logo">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
          {/* End Logo desktop	 */}
          {/* Start Menu desktop */}
          <div className="menu-desktop">
            <ul className="main-menu">
              <li className="active-menu">
                <a href="#/">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#/">Homepage 1</a>
                  </li>
                  <li>
                    <a href="#/">Homepage 2</a>
                  </li>
                  <li>
                    <a href="#/">Homepage 3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="product.html">Shop</a>
              </li>

              <li className="label1" data-label1="hot">
                <a href="#/">Features</a>
              </li>

              <li>
                <a href="#/">Blog</a>
              </li>

              <li>
                <a href="#/">About</a>
              </li>

              <li>
                <a href="#/">Contact</a>
              </li>
            </ul>
          </div>
          {/* End Menu desktop */}
          {/* Start Icon header */}
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
          {/* End Icon header */}
        </nav>
      </div>
    </div>
    // End Header Desktop
  )
}

export default Header
