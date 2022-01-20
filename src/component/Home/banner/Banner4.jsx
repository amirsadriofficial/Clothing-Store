import React from 'react'
import Grid from '@material-ui/core/Grid'
import banner1 from '../../../images/banner/banner2-1.jpg'
import banner2 from '../../../images/banner/banner2-2.jpg'

const Banner4 = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item xl={12} sm={7} md={5}>
        <img
          src={banner1}
          alt="banner"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
      <Grid item xl={12} sm={7} md={6}>
        <img
          src={banner2}
          alt="banner"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  )
}

export default Banner4
