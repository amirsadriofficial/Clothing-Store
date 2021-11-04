import React from 'react'
import Logo from '../images/logo.png'

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
        <nav className="container">
          {/* <!-- Logo desktop -->		 */}
          <a href="#/" className="">
            <img
              src={Logo}
              alt=""
              style={{
                height: '100px',
                width: '100px',
              }}
            />
          </a>
          {/* <!-- Menu desktop --> */}
          <div className="">
            <ul className="">
              <li className="">
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
          <div className="">
            <div className="">
              <i className="" />
            </div>
            <div className="" data-notify="2">
              <i className="" />
            </div>
            <a href="#/" className="" data-notify="0">
              <i className="" />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
