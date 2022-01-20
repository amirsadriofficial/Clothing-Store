import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import banner1 from '../../../images/banner/banner1-1.jpg'
import banner2 from '../../../images/banner/banner1-2.jpg'
import banner3 from '../../../images/banner/banner1-3.jpg'

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
    position: 'relative',
  },
  singleGridStyle: {
    border: '1px solid #e6e6e6',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionPosition: {
    position: 'absolute',
    top: '20px',
    left: '50px',
    fontSize: '18px',
  },
}))

const Banner1 = () => {
  const classes = useStyles()

  return (
    <Container className={classes.containerSpacing}>
      <Grid container spacing={2} className={classes.flexGrid}>
        <Grid item xs={12} sm={6} lg={4} className={classes.singleGrid}>
          <Grid className={classes.singleGridStyle}>
            <Link href="/">
              <img src={banner1} alt="bannerOne" className={classes.img} />
              <div className={classes.descriptionPosition}>
                <h4>Woman</h4>
                <p>Spring 2022</p>
              </div>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.singleGrid}>
          <Grid className={classes.singleGridStyle}>
            <Link href="/">
              <img src={banner2} alt="bannerTwo" className={classes.img} />
              <div className={classes.descriptionPosition}>
                <h4>Man</h4>
                <p>Spring 2022</p>
              </div>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.singleGrid}>
          <Grid className={classes.singleGridStyle}>
            <Link href="/">
              <img src={banner3} alt="bannerThree" className={classes.img} />
              <div className={classes.descriptionPosition}>
                <h4>Accessories</h4>
                <p>New Trend</p>
              </div>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Banner1
