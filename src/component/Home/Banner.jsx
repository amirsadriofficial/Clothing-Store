import React from 'react'
import Grid from '@material-ui/core/Grid'
// import { makeStyles } from '@material-ui/core/styles'
// import bannerOne from '../../images/banner/banner-01.jpg'
// import bannerTwo from '../../images/banner/banner-02.jpg'
// import bannerThree from '../../images/banner/banner-03.jpg'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }))

const Banner = () => {
  // const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        5
      </Grid>
      <Grid item xs={3}>
        6
      </Grid>
      <Grid item xs={3}>
        7
      </Grid>
    </Grid>
  )
}

export default Banner
