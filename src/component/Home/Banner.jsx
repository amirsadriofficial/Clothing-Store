import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import bannerOne from '../../images/banner/banner-01.jpg'
import bannerTwo from '../../images/banner/banner-02.jpg'
import bannerThree from '../../images/banner/banner-03.jpg'

const useStyles = makeStyles(() => ({
  containerSpacing: {
    marginTop: '80px',
    marginBottom: '80px',
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleGrid: {
    marginLeft: '10px',
    marginRight: '10px',
    border: '1px solid #e6e6e6',
  },
  img: {
    width: '100%',
    height: '100%',
  },
}))

const Banner = () => {
  const classes = useStyles()

  return (
    <Container className={classes.containerSpacing}>
      <Grid spacing={1} className={classes.flexGrid}>
        <Grid item xs={12} md={6} lg={4} className={classes.singleGrid}>
          <img src={bannerOne} alt="bannerOne" className={classes.img} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.singleGrid}>
          <img src={bannerTwo} alt="bannerTwo" className={classes.img} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.singleGrid}>
          <img src={bannerThree} alt="bannerThree" className={classes.img} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner
