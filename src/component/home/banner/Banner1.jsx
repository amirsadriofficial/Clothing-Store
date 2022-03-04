import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import banner1 from '../../../assets/images/banner/banner1-1.jpg'
import banner2 from '../../../assets/images/banner/banner1-2.jpg'
import banner3 from '../../../assets/images/banner/banner1-3.jpg'
import useStyles from './Styles'

const BannerComponent = (data) => {
  const classes = useStyles()
  const { image } = data
  const { title } = data
  const { description } = data

  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.singleGrid}>
      <Grid className={classes.singleGridStyle}>
        <Link to="/shop">
          <img src={image} alt="bannerOne" className={classes.img} />
          <div className={classes.descriptionPosition}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </Link>
      </Grid>
    </Grid>
  )
}

const Banner1 = () => {
  const classes = useStyles()

  return (
    <Container className={classes.containerSpacing}>
      <Grid container spacing={2} className={classes.flexGrid}>
        <BannerComponent
          image={banner1}
          title="Woman"
          description="Spring 2022"
        />
        <BannerComponent
          image={banner2}
          title="Man"
          description="Spring 2022"
        />
        <BannerComponent
          image={banner3}
          title="Accessories"
          description="New Trend"
        />
      </Grid>
    </Container>
  )
}

export default Banner1
