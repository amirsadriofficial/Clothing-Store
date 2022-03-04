import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header/Header'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout
