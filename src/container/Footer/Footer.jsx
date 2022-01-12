import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import iconPayOne from '../../images/icons/icon-pay-01.png'
import iconPayTwo from '../../images/icons/icon-pay-02.png'
import iconPayThree from '../../images/icons/icon-pay-03.png'
import iconPayFour from '../../images/icons/icon-pay-04.png'
import iconPayFive from '../../images/icons/icon-pay-05.png'

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#222',
  },
  flex: {
    marginTop: '50px',
    paddingBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexGridRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  footerItem: {
    marginTop: '10px',
  },
  buttonStyle: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
    marginTop: '35px',
    marginBottom: '1px',
  },
  buttonSpacing: {
    paddingLeft: '0px',
  },
  spanColor: {
    color: '#007bff',
    paddingLeft: '5px',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Container>
        <Grid container spacing={3} className={classes.flexGridRow}>
          <Grid item xs={6} sm={3}>
            <h4 className={classes.titleTextColor}>CATEGORIES</h4>
            <ul>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Women
                </Link>
              </li>
              <li className={classes.footerItem}>
                <Link href="#/" className={classes.TextColor}>
                  Men
                </Link>
              </li>
              <li className={classes.footerItem}>
                <Link href="#/" className={classes.TextColor}>
                  Shoes
                </Link>
              </li>
              <li className={classes.footerItem}>
                <Link href="#/" className={classes.TextColor}>
                  Watches
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h4 className={classes.titleTextColor}>HELP</h4>
            <ul>
              <li>
                <Link href="#/" className={classes.TextColor}>
                  Track Order
                </Link>
              </li>
              <li className={classes.footerItem}>
                <Link href="#/" className={classes.TextColor}>
                  Returns
                </Link>
              </li>
              <li className={classes.footerItem}>
                <Link href="#/" className={classes.TextColor}>
                  Shipping
                </Link>
              </li>
              <li className={classes.footerItem}>
                <Link href="#/" className={classes.TextColor}>
                  FAQs
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h4 className={classes.titleTextColor}>GET IN TOUCH</h4>
            <p className={classes.TextColor}>
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div>
              <IconButton
                className={clsx(classes.TextColor, classes.buttonSpacing)}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.TextColor}>
                <InstagramIcon />
              </IconButton>
              <IconButton className={classes.TextColor}>
                <LinkedInIcon />
              </IconButton>
              <IconButton className={classes.TextColor}>
                <TwitterIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h4 className={classes.titleTextColor}>NEWSLETTER</h4>
            <TextField
              label="Email"
              InputLabelProps={{
                style: { color: '#b2b2b2' },
              }}
              inputProps={{
                style: {
                  color: '#b2b2b2',
                },
              }}
              fullWidth
              placeholder="email@example.com"
            />
            <Button
              className={classes.buttonStyle}
              fullWidth
              variant="contained"
              color="primary"
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.flex}>
          <div>
            <img src={iconPayOne} alt="Icon Pay One" />
            <img src={iconPayTwo} alt="Icon Pay Two" />
            <img src={iconPayThree} alt="Icon Pay Three" />
            <img src={iconPayFour} alt="Icon Pay Four" />
            <img src={iconPayFive} alt="Icon Pay Five" />
          </div>
          <p className={classes.TextColor}>
            Copyright ©2022 All rights reserved | Developed By
            <span className={classes.spanColor}>Amir Sadri</span>
          </p>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
