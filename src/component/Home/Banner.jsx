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
    // margin: '15px',
    position: 'relative',
    border: '1px solid #e6e6e6',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionPosition: {
    position: 'absolute',
    top: '10px',
    left: '30px',
  },
}))

const Banner = () => {
  const classes = useStyles()

  return (
    <Container className={classes.containerSpacing}>
      <Grid container className={classes.flexGrid}>
        <Grid item xs={12} md={6} lg={4} className={classes.singleGrid}>
          <img src={bannerOne} alt="bannerOne" className={classes.img} />
          <div className={classes.descriptionPosition}>
            <h4>Woman</h4>
            <p>Spring 2022</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.singleGrid}>
          <img src={bannerTwo} alt="bannerTwo" className={classes.img} />
          <div className={classes.descriptionPosition}>
            <h4>Man</h4>
            <p>Spring 2022</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.singleGrid}>
          <img src={bannerThree} alt="bannerThree" className={classes.img} />
          <div className={classes.descriptionPosition}>
            <h4>Accessories</h4>
            <p>New Trend</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner
