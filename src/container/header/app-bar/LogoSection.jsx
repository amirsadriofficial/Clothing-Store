import React from 'react'
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'
import Logo from '../../../assets/images/icons/logo.png'

const LogoSection = () => {
  return (
    <>
      <Hidden smDown>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: '150px', height: '50px' }}
          />
        </Link>
      </Hidden>
      <Hidden mdUp>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: '75px', height: '25px' }}
          />
        </Link>
      </Hidden>
    </>
  )
}

export default LogoSection
