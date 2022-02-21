import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import {
  TextBlock,
  TextRow,
  RectShape,
} from 'react-placeholder/lib/placeholders'
import useStyles from './Styles'

const CustomPlaceholder = () => {
  const classes = useStyles()

  return (
    <div className={classes}>
      <RectShape color="#E0E0E0" style={{ width: 270, height: 335 }} />
      <TextRow rows={1} />
      <TextBlock rows={1} color="#E0E0E0" />
      <TextRow rows={1} />
      <TextBlock rows={2} color="#E0E0E0" />
      <TextRow rows={1} />
      <TextBlock rows={1} color="#E0E0E0" />
    </div>
  )
}

const Placeholder = () => {
  return <ReactPlaceholder customPlaceholder={<CustomPlaceholder />} />
}

export default Placeholder
