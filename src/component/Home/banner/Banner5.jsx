import React from 'react'
import Grid from '@material-ui/core/Grid'
import banner from '../../../assets/images/banner/banner5.jpeg'

const Banner5 = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item xl={12}>
        <img
          src={banner}
          alt="banner"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  )
}

export default Banner5
