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
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Amir',
    lastName: 'Sadri',
    age: '18',
    phoneNumber: '09384248024',
    emailAddress: 'amirsadriofficial@gmail.com',
    location: 'Ahar, East Azerbaijan, Iran',
  })
  const handleChange = (name, event) => {
    setPersonalInfo({ ...personalInfo, [name]: event.target.value })
  }

  return (
    <>
      <h2 className={classes.itemInfoTitle}>Personal Information</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="First Name"
            value={personalInfo.firstName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Last Name"
            value={personalInfo.lastName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Age"
            value={personalInfo.age}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Phone Number"
            value={personalInfo.phoneNumber}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Email Address"
            value={personalInfo.emailAddress}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Location"
            value={personalInfo.location}
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
