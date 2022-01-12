import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import clsx from 'clsx'
// import { BsInstagram } from 'react-icons/bs'
// import { FiTwitter } from 'react-icons/fi'
// import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai'
// import iconPayOne from '../../images/icons/icon-pay-01.png'
// import iconPayTwo from '../../images/icons/icon-pay-02.png'
// import iconPayThree from '../../images/icons/icon-pay-03.png'
// import iconPayFour from '../../images/icons/icon-pay-04.png'
// import iconPayFive from '../../images/icons/icon-pay-05.png'

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#222',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexGridRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexGridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleTextColor: {
    color: '#fff',
  },
  TextColor: {
    color: '#b2b2b2',
    textDecoration: 'none',
  },
  border: {
    paddingRight: '15px',
    paddingLeft: '15px',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
  },
  aloneBorder: {
    borderRight: '1px solid rgba(255,255,255,0.3)',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Container>
        <Grid className={classes.flexGridRow}>
          <Grid>
            <h4 className={classes.titleTextColor}>Categories</h4>
            <ul>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Women
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Men
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Watches
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid>
            <h4 className={classes.titleTextColor}>Help</h4>
            <ul>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  FAQs
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid>
            <h4 className={classes.titleTextColor}>GET IN TOUCH</h4>
            <ul>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Women
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Men
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Watches
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid>
            <h4 className={classes.titleTextColor}>Newsletter</h4>
            <ul>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Women
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Men
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Watches
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
