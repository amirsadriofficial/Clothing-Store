import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Title = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </Typography>
  )
}

Title.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

export default Title
