import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
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
    // height: '40px',
    backgroundColor: '#222',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColor: {
    color: '#b2b2b2',
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
        <Grid className={classes.flexGrid}>
          <Grid>
            <h4>Categories</h4>
            <Grid direction="column">
              <Button>Women</Button>
              <Button>Men</Button>
              <Button>Shoes</Button>
              <Button>Watches</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
