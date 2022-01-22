import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
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
          <Grid item sm={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              architecto aspernatur officiis veniam voluptates est dolores cum
              praesentium quo? Iusto facilis odio, doloremque officiis veniam
              quasi incidunt libero quas illo.
            </p>
          </Grid>
          <Grid item sm={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              architecto aspernatur officiis veniam voluptates est dolores cum
              praesentium quo? Iusto facilis odio, doloremque officiis veniam
              quasi incidunt libero quas illo.
            </p>
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
