import React from 'react'
import { Link } from 'react-router-dom'

const ShopHeader = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-md navbar-light mb-5">
      <div className="container">
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
                  All Products
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                <button type="button" className="nav-link-button">
                  Women
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <button type="button" className="nav-link-button">
                  Men
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <button type="button" className="nav-link-button">
                  Shoes
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <button type="button" className="nav-link-button">
                  Bag
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <button type="button" className="nav-link-button">
                  Watches
                </button>
              </Link>
            </li>
          </ul>
          <div>
            <div className="shop-header-right px-3">Filter</div>
            <div className="shop-header-right px-3">Search</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ShopHeader
