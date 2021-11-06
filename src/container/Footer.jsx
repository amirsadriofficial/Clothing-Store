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
            <h4 className="stext-301 cl0 p-b-30">Help</h4>

            <ul>
              <li className="p-b-10">
                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                  Track Order
                </a>
              </li>

              <li className="p-b-10">
                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                  Returns
                </a>
              </li>

              <li className="p-b-10">
                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                  Shipping
                </a>
              </li>

              <li className="p-b-10">
                <a href="#/" className="stext-107 cl7 hov-cl1 trans-04">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
