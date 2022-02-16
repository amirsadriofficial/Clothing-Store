import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import SlideOne from '../../../assets/images/slide/slide-01.jpg'
import useStyles from './Styles'

const Slide1 = () => {
  const classes = useStyles()

  return (
    <>
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
    </>
  )
}

export default Slide1
