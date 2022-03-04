import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import useStyles from './Styles'

const Slide = (data) => {
  const classes = useStyles()
  const { image } = data
  const { title } = data
  const { description } = data

  return (
    <>
      <img src={image} alt="SlideOne" className={classes.responsive} />
      <Hidden mdDown>
        <Grid className={classes.descriptionPosition}>
          <h2 className={`text-animation ${classes.descriptionFont}`}>
            {title}
          </h2>
          <p className={`text-animation ${classes.descriptionFont}`}>
            {description}
          </p>
          <Link to="/shop">
            <Button
              className={`button-animation ${classes.buttonStyle}`}
              style={{ width: '200px', height: '50px', fontSize: '20px' }}
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Link>
        </Grid>
      </Hidden>
      <Hidden lgUp smDown>
        <Grid className={classes.descriptionPositionLg}>
          <h2 className={`text-animation ${classes.descriptionFontLg}`}>
            {title}
          </h2>
          <p className={`text-animation ${classes.descriptionFontLg}`}>
            {description}
          </p>
          <Link to="/shop">
            <Button
              className={`button-animation ${classes.buttonStyle}`}
              size="large"
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Link>
        </Grid>
      </Hidden>
      <Hidden mdUp xsDown>
        <Grid className={classes.descriptionPositionMd}>
          <h2 className={`text-animation ${classes.descriptionFontMd}`}>
            {title}
          </h2>
          <p className={`text-animation ${classes.descriptionFontMd}`}>
            {description}
          </p>
          <Link to="/shop">
            <Button
              className={`button-animation ${classes.buttonStyle}`}
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Link>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid className={classes.descriptionPositionSm}>
          <h2 className={`text-animation ${classes.descriptionFontSm}`}>
            {title}
          </h2>
          <p className={`text-animation ${classes.descriptionFontSm}`}>
            {description}
          </p>
          <Link to="/shop">
            <Button
              className={`button-animation ${classes.buttonStyle}`}
              style={{ fontSize: '8px' }}
              size="small"
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Link>
        </Grid>
      </Hidden>
    </>
  )
}

export default Slide
