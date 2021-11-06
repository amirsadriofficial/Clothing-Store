import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div id="footer">
      <div className="container pt-5 pb-5">
        <div className="row pt-4">
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
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
            <form>
              <div className="wrap-input1 w-full p-b-4">
                <input
                  className="input1 bg-none plh1 stext-107 cl7"
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                />
                <div className="focus-input1 trans-04" />
              </div>
              <div className="p-t-18">
                <button
                  type="button"
                  className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
