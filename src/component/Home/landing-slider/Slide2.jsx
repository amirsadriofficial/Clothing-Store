import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import SlideTwo from '../../../assets/images/slide/slide-02.jpg'
import useStyles from './Styles'

const Slide2 = () => {
  const classes = useStyles()

  return (
    <>
      <img src={SlideTwo} alt="SlideTwo" className={classes.responsive} />
      <Hidden mdDown>
        <Grid className={classes.descriptionPosition}>
          <h2 className={classes.descriptionFont}>Man New-Season</h2>
          <p className={classes.descriptionFont}>JACKETS & COATS</p>
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
          <h2 className={classes.descriptionFontLg}>Man New-Season</h2>
          <p className={classes.descriptionFontLg}>JACKETS & COATS</p>
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
          <h2 className={classes.descriptionFontMd}>Man New-Season</h2>
          <p className={classes.descriptionFontMd}>JACKETS & COATS</p>
          <Button
            className={classes.buttonStyle}
            variant="contained"
            color="primary"
          >
            Shop Now
          </Button>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid className={classes.descriptionPositionSm}>
          <h2 className={classes.descriptionFontSm}>Man New-Season</h2>
          <p className={classes.descriptionFontSm}>JACKETS & COATS</p>
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
    </>
  )
}

export default Slide2
