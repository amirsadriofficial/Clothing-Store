import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '../card/Card'
import useStyles from './Styles'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const CarouselComponent = ({ Products, title }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.bodySection}>
      <Grid item xs={6} sm={3} md={2} lg={2}>
        <h3 className={classes.titleText}>{title}</h3>
      </Grid>
      <Carousel responsive={responsive} className={classes.carouselStyle}>
        {Products.map((product) => (
          <Card data={product} />
        ))}
      </Carousel>
      <Grid item xs={12} className={classes.buttonStyle}>
        <Grid item xs={9} sm={6} md={4} lg={3}>
          <Link to="/shop">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.buttonHover}
            >
              See All Products
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CarouselComponent
