import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import CallOutlinedIcon from '@material-ui/icons/CallOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import Background from '../../images/background/contact-bg.jpg'

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '240px',
    backgroundImage: `url(${Background})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: '100px,
  },
  title: {
    fontSize: '50px',
    color: '#fff',
  },
  container: {
    marginBottom: '75px',
    marginTop: '75px',
  },
  sectionStyle: {
    border: '1px solid #e6e6e6',
  },
})

const Contact = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.background}>
        <h2 className={classes.title}>Contact</h2>
      </div>
      <Container className={classes.container}>
        <Grid container spacing={0}>
          <Grid item sm={6} className={classes.sectionStyle}>
            <h3>Send Us A Message</h3>
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item sm={6} className={classes.sectionStyle}>
            <Grid>
              <LocationOnOutlinedIcon />
              <h4>Address</h4>
              <p>Text</p>
            </Grid>
            <Grid>
              <CallOutlinedIcon />
              <h4>Address</h4>
              <p>Text</p>
            </Grid>
            <Grid>
              <EmailOutlinedIcon />
              <h4>Address</h4>
              <p>Text</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact

/* <img
  src={Background}
  alt="Background"
  style={{ width: '', height: '240p' }}
/> */
