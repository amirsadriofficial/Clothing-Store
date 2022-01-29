import React from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
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
    width: '140px',
    height: '140px',
  },
  priceText: {
    paddingTop: '10px',
    color: '#000',
    fontSize: '16px',
  },
  cardArea: {
    display: ' flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
  },
  cardAction: {
    padding: '10px',
  },
  pageTitleText: {
    margin: '0',
    fontSize: '35px',
  },
  pageTitle: {
    borderBottom: '1px solid #515151;',
  },
}))

const Favorites = () => {
  const classes = useStyles()
  // const { id } = useParams()
  const product = Product.find((item) => item.id === 'bag_product_4')
  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.pageTitle}>
          <h2 className={classes.pageTitleText}>Favorites</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardActionArea className={classes.cardArea}>
              <Grid item xs={5} sm={3}>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    style={{ fontSize: '20px' }}
                  >
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
              </Grid>
            </CardActionArea>
            <Grid container spacing={3} className={classes.cardAction}>
              <Grid item xs={8} sm={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                >
                  Add To Cart
                </Button>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  color="primary"
                  fullWidth
                  endIcon={<ArrowForwardIosIcon />}
                >
                  <Link to={`/product/${product.id}`}>See Product</Link>
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardActionArea className={classes.cardArea}>
              <Grid item xs={5} sm={3}>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    style={{ fontSize: '20px' }}
                  >
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
              </Grid>
            </CardActionArea>
            <Grid container spacing={3} className={classes.cardAction}>
              <Grid item xs={8} sm={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                >
                  Add To Cart
                </Button>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  color="primary"
                  fullWidth
                  endIcon={<ArrowForwardIosIcon />}
                >
                  See Products
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardActionArea className={classes.cardArea}>
              <Grid item xs={5} sm={3}>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    style={{ fontSize: '20px' }}
                  >
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
              </Grid>
            </CardActionArea>
            <Grid container spacing={3} className={classes.cardAction}>
              <Grid item xs={8} sm={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<ShoppingCartIcon />}
                >
                  Add To Cart
                </Button>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  color="primary"
                  fullWidth
                  endIcon={<ArrowForwardIosIcon />}
                >
                  See Products
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Favorites
