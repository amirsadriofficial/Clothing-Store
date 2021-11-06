import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4>Help</h4>
            <ul className="reset-space">
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
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4>GET IN TOUCH</h4>
            <p>
              Lorem ipsum dolor sit amet, duo te graeci apeirian, at has
              albucius salutatus referrentur. Nusquam mandamus te qui.
            </p>
            <div id="social-media">
              <a href="#/">
                <AiOutlineFacebook size={20} />
              </a>
              <a href="#/">
                <FiTwitter />
              </a>
              <a href="#/">
                <BsInstagram />
              </a>
              <a href="#/">
                <AiOutlineLinkedin size={20} />
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4>Categories</h4>
            <ul className="reset-space">
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
        </div>
      </div>
    </div>
  )
}

export default Footer
