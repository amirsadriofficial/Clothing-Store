import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useStyles from './Styles'

const CardComponent = (product) => {
  const classes = useStyles()
  const Product = product

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Link to={`/product/${Product.data.id}`}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Product.data.image}
                title={Product.data.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {Product.data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {Product.data.description}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.priceText}
                >
                  ${Product.data.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </>
  )
}

export default CardComponent
