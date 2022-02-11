import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import FilterListIcon from '@material-ui/icons/FilterList'
import Popper from '@material-ui/core/Popper'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import ManProducts from './products/Man'
import BagProducts from './products/Bag'
import WomanProducts from './products/Woman'
import ShoesProducts from './products/Shoes'
import WatchesProducts from './products/Watches'
import AllProducts from './products/AllProducts'

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
    width: '100%',
  },
  filterButton: {
    paddingRight: '30px',
  },
  paperStyle: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  typography: {
    padding: theme.spacing(2),
  },
  buttonStyle: {
    margin: '5px',
  },
}))

const ShopHeader = () => {
  const classes = useStyles()
  // const all = 'All Price'
  // const up = 'All Price'
  // const above = 'All Price'
  const [activeAppBarClass, setActiveAppBarClass] = useState('inactive')
  const refAppBar = useRef()
  const refAllFilterButton = useRef()
  const refUpTo100FilterButton = useRef()
  const refAbove100FilterButton = useRef()
  const theme = useTheme()
  const [filter, setFilter] = useState('All Price')
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeIndex = (index) => {
    setValue(index)
  }
  const handlePopperSpacing = () => {
    setTimeout(() => {
      if (activeAppBarClass === 'inactive') {
        refAppBar.current.classList.add('shop-app-bar')
        setActiveAppBarClass('active')
      }
      if (activeAppBarClass === 'active') {
        refAppBar.current.classList.remove('shop-app-bar')
        setActiveAppBarClass('inactive')
      }
    }, 750)
  }
  const handleAllPriceFilter = () => {
    if (filter !== 'All Price') {
      setFilter('All Price')
      refAllFilterButton.current.classList.add('active-filter-button')
    }
    console.log('clicked:', filter)
  }
  const handleUpToOneHundredPriceFilter = () => {
    if (filter !== 'Up To One Hundred Price') {
      setFilter('Up To One Hundred Price')
      refUpTo100FilterButton.current.classList.add('active-filter-button')
    }
    console.log('clicked:', filter)
  }
  const handleAboveOneHundredPriceFilter = () => {
    if (filter !== 'Above One Hundred Price') {
      setFilter('Above One Hundred Price')
      refAbove100FilterButton.current.classList.add('active-filter-button')
    }
    console.log('clicked:', filter)
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
          <div className={classes.filterButton}>
            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <div>
                  <Button
                    color="primary"
                    startIcon={<FilterListIcon />}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...bindToggle(popupState)}
                    onMouseEnter={handlePopperSpacing}
                  >
                    Filter
                  </Button>
                  <Popper
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...bindPopper(popupState)}
                    transition
                    style={{
                      width: '100%',
                      marginTop: '15px',
                      paddingRight: '30px !importent',
                    }}
                  >
                    {({ TransitionProps }) => (
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      <Fade {...TransitionProps} timeout={500}>
                        <Paper className={classes.paperStyle}>
                          <div className={classes.typography}>
                            <Typography className={classes.buttonStyle}>
                              Sort By:
                            </Typography>
                            <Button
                              variant="outlined"
                              color="primary"
                              className={classes.buttonStyle}
                            >
                              All
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonStyle}
                            >
                              Popularity
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonStyle}
                            >
                              Newness
                            </Button>
                          </div>
                          <div className={classes.typography}>
                            <Typography className={classes.buttonStyle}>
                              Price:
                            </Typography>
                            <Button
                              variant="outlined"
                              // color="primary"
                              className={classes.buttonStyle}
                              onClick={handleAllPriceFilter}
                              ref={refAllFilterButton}
                            >
                              All
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonStyle}
                              onClick={handleUpToOneHundredPriceFilter}
                              ref={refUpTo100FilterButton}
                            >
                              $0.00 - $100.00
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonStyle}
                              onClick={handleAboveOneHundredPriceFilter}
                              ref={refAbove100FilterButton}
                            >
                              + $100.00
                            </Button>
                          </div>
                          <div className={classes.typography}>
                            <Typography className={classes.buttonStyle}>
                              Brand:
                            </Typography>
                            <Button
                              variant="outlined"
                              color="primary"
                              className={classes.buttonStyle}
                            >
                              All
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonStyle}
                            >
                              GUCCI
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonStyle}
                            >
                              Nike
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.buttonStyle}
                            >
                              Adidas
                            </Button>
                          </div>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
          </div>
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
            <WomanProducts />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ManProducts />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <BagProducts />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <ShoesProducts />
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            <WatchesProducts />
          </TabPanel>
        </SwipeableViews>
      </div>
    </Container>
  )
}

export default ShopHeader
