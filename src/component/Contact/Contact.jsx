import React from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../images/background/contact-bg.jpg'

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '100%',
    backgroundImage: `url('${Background}')`,
    marginBottom: '100px',
  },
  title: {
    fontSize: '50px',
    color: '#fff',
    position: 'absolute',
    top: '150px',
    left: '45%',
  },
})

const Contact = () => {
  const classes = useStyles()

  return (
    <>
      <Paper className={classes.background}>
        {/* <img
          src={Background}
          alt="Background"
          style={{ width: '100%', height: '100p' }}
        /> */}
        {/* <h2 className={classes.title}>Contact</h2> */}
      </Paper>
      <Container>
        <div>aaaaaaaaaaa</div>
      </Container>
    </>
  )
}

export default Contact
