import React from 'react'
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
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
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
    marginTop: '20px',
    paddingBottom: '20px',
  },
  cartTotalBox: {
    marginTop: '15px',
    border: '1px solid #e6e6e6',
    maxHeight: '300px',
  },
  cartTotalInfo: {
    borderTop: '1px solid #e6e6e6',
    borderBottom: '1px solid #e6e6e6',
  },
}))

const Cart = () => {
  const classes = useStyles()
  // const { id } = useParams()
  const product = Product.find((item) => item.id === 'bag_product_2')
  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid item xs={12} style={{ marginBottom: '10px' }}>
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
                      style={{ fontSize: '24px' }}
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
                <Grid item xs={12} sm={4}>
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <IconButton aria-label="delete">
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      value={1}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <IconButton aria-label="delete">
                      <AddIcon />
                    </IconButton>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item xs={8} sm={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    className={classes.button}
                    startIcon={<FavoriteBorderIcon />}
                  >
                    Add To Favorites
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '10px' }}>
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
                </Grid>
              </CardActionArea>
              <Grid container spacing={3} className={classes.cardAction}>
                <Grid item xs={12} sm={4}>
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <IconButton aria-label="delete">
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      value={1}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <IconButton aria-label="delete">
                      <AddIcon />
                    </IconButton>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item xs={8} sm={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    className={classes.button}
                    startIcon={<FavoriteBorderIcon />}
                  >
                    Add To Favorites
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: '10px' }}>
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
                </Grid>
              </CardActionArea>
              <Grid container spacing={3} className={classes.cardAction}>
                <Grid item xs={12} sm={4}>
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <IconButton aria-label="delete">
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      value={1}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <IconButton aria-label="delete">
                      <AddIcon />
                    </IconButton>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item xs={8} sm={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    className={classes.button}
                    startIcon={<FavoriteBorderIcon />}
                  >
                    Add To Favorites
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cartTotalBox}>
          <h5 style={{ fontSize: '35px', margin: '10px' }}>Cart Totals</h5>
          <div className={classes.cartTotalInfo}>
            <p>
              Subtotal: <span>$300</span>
            </p>
            <p>
              Product Discounts: <span style={{ color: 'red' }}>$0</span>
            </p>
          </div>
          <p style={{ fontSize: '25px' }}>
            Total: <span>$300</span>
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className={classes.button}
          >
            Proceed To Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
