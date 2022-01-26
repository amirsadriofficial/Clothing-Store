import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  itemInfoTitle: {
    marginTop: '0px',
  },
  itemInfoBox: {
    border: '1px solid #000',
  },
  itemInfoText: {
    paddingLeft: '10px',
  },
  editInfoBox: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Information = () => {
  const classes = useStyles()

  return (
    <>
      <h2 className={classes.itemInfoTitle}>Personal Information</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          Name:
          <div className={classes.itemInfoBox}>
            <p className={classes.itemInfoText}>Amir</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          Family:
          <div className={classes.itemInfoBox}>
            <p className={classes.itemInfoText}>Sadri</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          Phone Number:
          <div className={classes.itemInfoBox}>
            <p className={classes.itemInfoText}>09384248024</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          Email Address:
          <div className={classes.itemInfoBox}>
            <p className={classes.itemInfoText}>amirsadriofficial@gmail.com</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          Age:
          <div className={classes.itemInfoBox}>
            <p className={classes.itemInfoText}>18 Years Old</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          Location:
          <div className={classes.itemInfoBox}>
            <p className={classes.itemInfoText}>Ahar, East Azerbaijan, Iran</p>
          </div>
        </Grid>
        <Grid item md={12} className={classes.editInfoBox}>
          <Grid item md={4}>
            <Button color="primary" fullWidth>
              Edit personal information
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Information
