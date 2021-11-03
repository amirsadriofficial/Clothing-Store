import React from 'react'

const Header = () => {
  return (
    // Header desktop
    <div className="container">
      {/* Topbar */}
      <div className="top-bar">
        <div className="left">Free shipping for standard order over $100</div>
        <div className="right">
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            Help & FAQs
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            My Account
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            EN
          </a>
          <a href="#" className="flex-c-m trans-04 p-lr-25">
            USD
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
