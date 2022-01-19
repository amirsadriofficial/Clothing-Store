import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Products from '../../../utils/woman-products'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  media: {
    width: '100%',
    height: '335px',
  },
  priceText: {
    paddingTop: '10px',
    color: '#000',
    fontSize: '16px',
  },
})

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const WomanSlider = () => {
  const classes = useStyles()

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      autoPlay={this.props.deviceType !== 'mobile'}
      autoPlaySpeed={1000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {Products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.priceText}
                >
                  ${product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
              <IconButton aria-label="delete">
                <FavoriteBorderIcon />
              </IconButton>
            </CardActions> */}
          </Card>
        </Grid>
      ))}
    </Carousel>
  )
}

export default WomanSlider
