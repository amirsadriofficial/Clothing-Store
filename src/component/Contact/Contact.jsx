import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../images/background/contact-bg.jpg'

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '100%',
    backgroundImage: `url('${Background}')`,
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
      <div className={classes.background}>
        {/* <img
          src={Background}
          alt="Background"
          style={{ width: '100%', height: '100p' }}
        /> */}
        {/* <h2 className={classes.title}>Contact</h2> */}
      </div>
      <Container>
        <div>aaaaaaaaaaa</div>
      </Container>
    </>
  )
}

export default Contact
