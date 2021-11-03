import React from 'react'

const Header = () => {
  return (
    // Header Desktop
    <div className="black">
      <div className="right-align">
        Free shopping for standard order over $100
      </div>
    </div>
    <nav>
      <div className="container">
          <div className="nav-wrapper">
              <a href="#/" className="left brand-logo">Logo</a>
              <ul className="right hide-on-med-and-down">
                  <li>
                      <a href="#">صفحه اصلی</a>
                  </li>
                  <li className="active">
                      <a href="#">درباره ما</a>
                  </li>
                  <li>
                      <a href="#">تماس با ما</a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Header
