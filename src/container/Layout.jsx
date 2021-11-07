import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  )
}

export default Layout
