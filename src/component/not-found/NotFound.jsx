import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import useStyles from './Styles'

const NotFound = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <h6 className={`logo-animation ${classes.numberStyle}`}>404</h6>
      <p className={classes.textStyle}>Page Not Found</p>
      <Link to="/">
        <Button
          variant="outlined"
          color="primary"
          startIcon={<HomeOutlinedIcon />}
          size="large"
          fullWidth
        >
          Back Home
        </Button>
      </Link>
    </Container>
  )
}

export default NotFound
