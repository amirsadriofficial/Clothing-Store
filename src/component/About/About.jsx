import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import clsx from 'clsx'
import Background from '../../images/background/about-bg.jpg'

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '240px',
    backgroundImage: `url(${Background})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '50px',
    color: '#fff',
  },
  container: {
    marginBottom: '75px',
    marginTop: '75px',
  },
})

const About = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.background}>
        <h2 className={classes.title}>About</h2>
      </div>
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid item xs={6}>
              text 1
            </Grid>
            <Grid item xs={6}>
              picture 1
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={6}>
              picture 2
            </Grid>
            <Grid item xs={6}>
              text 2
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default About
