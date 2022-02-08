import React from 'react'
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
  console.log('filter:', filter)

  return (
    <Grid container spacing={3}>
      {filter === 'Above One Hundred Price' ? (
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
        'is not valid'
      )}
    </Grid>
  )
}

export default AllProducts
