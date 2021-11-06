import React from 'react'

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4>Categories</h4>
            <ul>
              <li>
                <a href="#/">Women</a>
              </li>

              <li>
                <a href="#/">Men</a>
              </li>

              <li>
                <a href="#/">Shoes</a>
              </li>

              <li>
                <a href="#/">Watches</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#/">Track Order</a>
              </li>

              <li>
                <a href="#/">Returns</a>
              </li>

              <li>
                <a href="#/">Shipping</a>
              </li>

              <li>
                <a href="#/">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
