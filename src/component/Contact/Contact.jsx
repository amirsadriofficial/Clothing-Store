import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import clsx from 'clsx'
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '75px',
    marginTop: '75px',
  },
  sectionStyle: {
    border: '1px solid #e6e6e6',
  },
  firstSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstSectionStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    // paddingTop: '50px',
    // paddingBottom: '50px',
    // paddingLeft: '100px',
    // paddingRight: '100px',
  },
  secondSubSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    marginTop: '30px',
  },
  flexSubSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  titleSection: {
    fontSize: '30px',
    marginBottom: '25px',
  },
  objectSubSection: {
    marginBottom: '20px',
  },
  titleSubSection: {
    marginTop: '0px',
    fontSize: '18px',
    marginBottom: '0px',
    paddingLeft: '10px',
  },
  textSubSection: {
    color: '#717fe0',
    cursor: 'pointer',
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
          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            className={clsx(classes.sectionStyle, classes.firstSectionStyle)}
          >
            <Grid item sm={9} className={classes.firstSection}>
              <h3 className={classes.titleSection}>Send Us A Message</h3>
              <TextField
                className={classes.objectSubSection}
                id="outlined-textarea"
                label="Your Email Address"
                placeholder="email@example.com"
                multiline
                fullWidth
                variant="outlined"
              />
              <TextField
                className={classes.objectSubSection}
                id="outlined-textarea"
                label="How Can We Help?"
                placeholder="Write your opinion or problem for us"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.objectSubSection}
                style={{ borderRadius: '25px' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={clsx(classes.sectionStyle, classes.secondSection)}
          >
            <Grid className={classes.secondSubSection}>
              <LocationOnOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Address</h4>
                <p>
                  The Amazon Corporate Headquarters address is 410 Terry Ave N,
                  Seattle 98109, WA.
                </p>
              </Grid>
            </Grid>
            <Grid className={classes.secondSubSection}>
              <CallOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Lets Talk</h4>
                <p className={classes.textSubSection}>+1 888-280-4331</p>
              </Grid>
            </Grid>
            <Grid className={classes.secondSubSection}>
              <EmailOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Sale Support</h4>
                <p className={classes.textSubSection}>cis@amazon.com</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact
