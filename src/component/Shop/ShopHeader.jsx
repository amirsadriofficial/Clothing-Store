import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  index: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
}

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
  },
}))

const ShopHeader = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Tab label="All Products" {...a11yProps(0)} />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Tab label="Women" {...a11yProps(1)} />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Tab label="Men" {...a11yProps(2)} />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Tab label="Bag" {...a11yProps(3)} />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Tab label="Shoes" {...a11yProps(4)} />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Tab label="Watches" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One All Products
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two Women
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three Men
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four Bag
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Five Shoes
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item Six Watches
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
export default ShopHeader
