import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Products from '../../../utils/all-products'
import useStyles from './Styles'

const SearchProducts = ({ data, open, onClose }) => {
  const classes = useStyles()
  const searchTerm = data
  if (!open) return null

  return (
    <>
      <Button onClick={onClose}>Close</Button>
      <Typography
        variant="h6"
        component="h2"
        color="primary"
        className={classes.searchBoxTitle}
      >
        Recent Searches:
      </Typography>
      {Products.filter((product) => {
        if (
          searchTerm !== '' &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return product
        }
        return null
      }).map((product) => (
        <>
          <Link to={`/product/${product.id}`}>
            <Grid container direction="row" alignItems="center">
              <Card className={classes.searchCard}>
                <CardActionArea className={classes.cardArea}>
                  <Grid
                    xs={5}
                    sm={3}
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <CardMedia
                      // className={classes.media}
                      image={product.image}
                      title={product.name}
                      className={classes.productImage}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        className={classes.productName}
                      >
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Grid>
                  {/* <Grid item xs={12}> */}
                  {/* </Grid> */}
                </CardActionArea>
              </Card>
            </Grid>
          </Link>

          <Divider />
        </>
      ))}
    </>
  )
}

export default SearchProducts
