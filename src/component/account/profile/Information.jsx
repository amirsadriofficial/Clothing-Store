import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
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
  const [name, setName] = useState('Amir')
  const [family, setFamily] = useState('Amir')
  const [name, setName] = useState('Amir')
  const [name, setName] = useState('Amir')
  const [name, setName] = useState('Amir')
  const [name, setName] = useState('Amir')
  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <h2 className={classes.itemInfoTitle}>Personal Information</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Name"
            value={name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Family"
            value={name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField
            id="outlined-name"
            label="Age"
            value={name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Email Address"
            value={name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField
            id="outlined-name"
            label="Phone Number"
            value={name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Location"
            value={name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
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
