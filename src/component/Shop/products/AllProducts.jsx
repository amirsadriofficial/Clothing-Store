import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Products from '../../../utils/all-products'

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

const AllProducts = (filter) => {
  const classes = useStyles()
  const [filteredProducts, setFilteredProducts] = useState(Products)
  console.log('filter:', filter)
  // const handleFilter = () => {
  if (filter === 'All Price') {
    setFilteredProducts(Products)
  }
  const UpTo100 = Products.filter((product) => product.price < 100)
  if (filter === 'Up To One Hundred Price') {
    setFilteredProducts(UpTo100)
  }
  const Above100 = Products.filter((product) => product.price > 100)
  if (filter === 'Above One Hundred Price') {
    setFilteredProducts(Above100)
  }
  // }

  return (
    <Grid container spacing={3}>
      {/* {filter ? (
        <> */}
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
      {/* </>
      ) : (
        'All is not valid'
      )} */}
      {/* {filter ? (
        <>
          {Products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
        </>
      ) : (
        'Up To is not valid'
      )}
      {filter ? (
        <>
          {Products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
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
        </>
      ) : (
        'Above is not valid'
      )} */}
    </Grid>
  )
}

export default AllProducts
