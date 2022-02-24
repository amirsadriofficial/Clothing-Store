import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ManProducts from '../products/Man'
import BagProducts from '../products/Bag'
import WomanProducts from '../products/Woman'
import ShoesProducts from '../products/Shoes'
import WatchesProducts from '../products/Watches'
import AllProducts from '../products/AllProducts'
import FilterSection from './FilterSection'
import useStyles from './Styles'

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

const ShopHeader = () => {
  const classes = useStyles()
  const theme = useTheme()
  const refAppBar = useRef()
  const [filter, setFilter] = useState('ALL')
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <Container>
      <div className={classes.root}>
        <AppBar
          ref={refAppBar}
          position="static"
          color="inherit"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '50px',
          }}
          className=""
        >
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
          <FilterSection setFilter={setFilter} refAppBar={refAppBar} />
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <AllProducts filter={filter} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <WomanProducts filter={filter} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ManProducts filter={filter} />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <BagProducts filter={filter} />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <ShoesProducts filter={filter} />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <WatchesProducts filter={filter} />
          </TabPanel>
        </SwipeableViews>
      </div>
    </Container>
  )
}

export default ShopHeader
