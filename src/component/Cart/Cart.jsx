import React from 'react'
// import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
// import PlayArrowIcon from '@material-ui/icons/PlayArrow'
// import SkipNextIcon from '@material-ui/icons/SkipNext'
import Product from '../../utils/all-products'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '50px',
    marginBottom: '50px',
  },
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
}))

const Cart = () => {
  const classes = useStyles()
  // const { id } = useParams()
  const product = Product.find((item) => item.id === 'bag_product_2')
  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={8}>
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
          </Card>
        </Grid>
        <Grid item md={4}>
          bar
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
