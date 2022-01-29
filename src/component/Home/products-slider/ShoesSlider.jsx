import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Products from '../../../utils/shoes-products'

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

const useStyles = makeStyles({
  root: {
    width: '270px',
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
  bodySection: {
    marginTop: '50px',
    marginBottom: '50px',
    backgroundColor: '#f5f5f5',
  },
  carouselStyle: {
    paddingBottom: '30px',
    marginLeft: '30px',
  },
  titleText: {
    marginLeft: '30px',
    fontSize: '25px',
    paddingTop: '30px',
    paddingBottom: '10px',
    borderBottom: '2px solid #717fe0',
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20px',
  },
})

const ShoesSlider = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.bodySection}>
      <Grid item xs={6} sm={3} md={2} lg={2}>
        <h3 className={classes.titleText}>Shoes</h3>
      </Grid>
      <Carousel responsive={responsive} className={classes.carouselStyle}>
        {Products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Link to={`/product/${product.id}`}>
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
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
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
              </Card>
            </Link>
          </Grid>
        ))}
      </Carousel>
      <Grid item xs={12} className={classes.buttonStyle}>
        <Grid item xs={9} sm={6} md={4} lg={3}>
          <Button variant="contained" color="primary" fullWidth>
            <Link to="/shop">See All Products</Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ShoesSlider
