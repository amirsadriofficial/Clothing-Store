import React from 'react'
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
import Products from '../../../utils/bags-products'

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

const Bag = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
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
    </Grid>
  )
}

export default Bag
