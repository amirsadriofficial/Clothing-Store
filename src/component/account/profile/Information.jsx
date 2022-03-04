import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  itemInfoTitle: {
    marginTop: '0px',
  },
  editInfoBox: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Information = () => {
  const classes = useStyles()
  const account = JSON.parse(localStorage.getItem('Account'))
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Amir',
    lastName: 'Sadri',
    age: '18',
    phoneNumber: '09384248024',
    emailAddress: 'Amirsadriofficial@gmail.com',
    location: 'Ahar, East Azerbaijan, Iran',
  })
  const handleChange = (name, value) => {
    setPersonalInfo({ ...personalInfo, [name]: value.target.value })
  }

  return (
    <>
      <h2 className={classes.itemInfoTitle}>Personal Information</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="First Name"
            value={account[0].firstName}
            onChange={(value) => handleChange('firstName', value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Last Name"
            value={account[0].lastName}
            onChange={(value) => handleChange('lastName', value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Age"
            value={personalInfo.age}
            onChange={(value) => handleChange('age', value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Phone Number"
            value={personalInfo.phoneNumber}
            onChange={(value) => handleChange('phoneNumber', value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Email Address"
            value={account[0].email}
            onChange={(value) => handleChange('emailAddress', value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-name"
            label="Location"
            value={personalInfo.location}
            onChange={(value) => handleChange('location', value)}
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
