import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import clsx from 'clsx'
import SlideOne from '../../images/slide/slide-01.jpg'
import SlideTwo from '../../images/slide/slide-02.jpg'
import SlideThree from '../../images/slide/slide-03.jpg'

const useStyles = makeStyles(() => ({
  responsive: {
    width: '100%',
    height: 'auto',
  },
  //-----------------------------------------------------------------------
  descriptionPosition: {
    position: 'absolute',
    bottom: '250px',
    left: '125px',
  },
  descriptionPositionLg: {
    position: 'absolute',
    bottom: '200px',
    left: '100px',
  },
  descriptionPositionMd: {
    position: 'absolute',
    bottom: '150px',
    left: '75px',
  },
  descriptionPositionSm: {
    position: 'absolute',
    bottom: '90px',
    left: '40px',
  },
  //-----------------------------------------------------------------------
  descriptionFont: {
    fontSize: '50px',
  },
  descriptionFontLg: {
    fontSize: '35px',
  },
  descriptionFontMd: {
    fontSize: '25px',
  },
  descriptionFontSm: {
    fontSize: '15px',
  },
  //-----------------------------------------------------------------------
  buttonStyle: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
    marginTop: '0px',
    marginBottom: '1px',
  },
}))

const SliderComponent = () => {
  const classes = useStyles()

  return (
    <Carousel autoPlay={false}>
      <div>
        <img src={SlideOne} alt="SlideOne" className={classes.responsive} />
        <Hidden mdDown>
          <Grid className={classes.descriptionPosition}>
            <h2 className={classes.descriptionFont}>Woman Collection 2022</h2>
            <p className={classes.descriptionFont}>NEW SEASON</p>
            <Button
              className={classes.buttonStyle}
              style={{ width: '200px', height: '50px', fontSize: '20px' }}
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Grid>
        </Hidden>
        <Hidden lgUp smDown>
          <Grid className={classes.descriptionPositionLg}>
            <h2 className={classes.descriptionFontLg}>Woman Collection 2022</h2>
            <p className={classes.descriptionFontLg}>NEW SEASON</p>
            <Button
              className={classes.buttonStyle}
              size="large"
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Grid>
        </Hidden>
        <Hidden mdUp xsDown>
          <Grid className={classes.descriptionPositionMd}>
            <h2 className={classes.descriptionFontMd}>Woman Collection 2022</h2>
            <p className={classes.descriptionFontMd}>NEW SEASON</p>
            <Button
              className={clsx(
                classes.buttonStyle,
                classes.buttonResponsiveStyle
              )}
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid className={classes.descriptionPositionSm}>
            <h2 className={classes.descriptionFontSm}>Woman Collection 2022</h2>
            <p className={classes.descriptionFontSm}>NEW SEASON</p>
            <Button
              className={classes.buttonStyle}
              style={{ fontSize: '8px' }}
              size="small"
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Grid>
        </Hidden>
      </div>
      <div>
        <img src={SlideTwo} alt="SlideTwo" className={classes.responsive} />
        <div className={classes.descriptionPosition}>
          <h2>Man New-Season</h2>
          <p>JACKETS & COATS</p>
          <Button
            className={clsx(classes.buttonStyle, classes.buttonResponsiveStyle)}
            size="large"
            variant="contained"
            color="primary"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div>
        <img src={SlideThree} alt="SlideThree" className={classes.responsive} />
        <div className={classes.descriptionPosition}>
          <h2>Man Collection 2022</h2>
          <p>NEW ARRIVALS</p>
          <Button
            className={clsx(classes.buttonStyle, classes.buttonResponsiveStyle)}
            size="large"
            variant="contained"
            color="primary"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </Carousel>
  )
}

export default SliderComponent
