import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Products from '../../../utils/all-products'
import useStyles from './Styles'

const SearchProducts = ({ data, open }) => {
  const classes = useStyles()
  const searchTerm = data
  if (!open) return null

  return (
    <>
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
                <CardActionArea>
                  <Grid container direction="row" alignItems="center">
                    <CardMedia
                      image={product.image}
                      title={product.name}
                      className={classes.productImage}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography className={classes.productName}>
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Grid>
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
