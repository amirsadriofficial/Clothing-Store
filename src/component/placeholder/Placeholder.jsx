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
    <div className={classes.customPlaceholder}>
      <RectShape className={classes.imagePlaceholder} color="#E0E0E0" />
      <TextRow className={classes.namePlaceholder} color="#E0E0E0" rows={1} />
      <TextBlock
        className={classes.descriptionPlaceholder}
        color="#E0E0E0"
        rows={2}
      />
      <TextRow className={classes.pricePlaceholder} color="#E0E0E0" rows={1} />
    </div>
  )
}

const Placeholder = () => {
  return <ReactPlaceholder customPlaceholder={<CustomPlaceholder />} />
}

export default Placeholder
