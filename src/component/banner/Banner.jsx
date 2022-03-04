import React from 'react'
import Grid from '@material-ui/core/Grid'

const Banner2 = (data) => {
  const { image } = data

  return (
    <Grid
      container
      spacing={3}
      style={{
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <Grid item xl={12}>
        <img
          src={image}
          alt="banner"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  )
}

export default Banner2
