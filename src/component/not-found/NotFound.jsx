import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

const useStyle = makeStyles({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberStyle: {
    fontSize: '200px',
    margin: '0',
    color: '#B71919',
  },
  textStyle: {
    fontSize: '50px',
    color: '#B71919',
  },
})

const NotFound = () => {
  const classes = useStyle()

  return (
    <Container className={classes.container}>
      <h6 className={classes.numberStyle}>404</h6>
      <p className={classes.textStyle}>Page Not Found</p>
      <Link to="/">
        <Button
          variant="outlined"
          color="primary"
          startIcon={<HomeOutlinedIcon />}
          size="large"
          fullWidth
        >
          Back To Home
        </Button>
      </Link>
    </Container>
  )
}

export default NotFound
