import React, { useState, useRef } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FilterListIcon from '@material-ui/icons/FilterList'
import Popper from '@material-ui/core/Popper'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import useStyles from './Styles'

const FilterItemButton = ({ title, color }) => {
  const classes = useStyles()

  return (
    <Button variant="outlined" color={color} className={classes.buttonStyle}>
      {title}
    </Button>
  )
}

const FilterSection = ({ filter, setFilter, refAppBar }) => {
  const classes = useStyles()
  const [activeAppBarClass, setActiveAppBarClass] = useState('inactive')
  const refAllFilterButton = useRef()
  const refUpTo100FilterButton = useRef()
  const refAbove100FilterButton = useRef()
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
    if (filter !== 'ALL') {
      setFilter('ALL')
    }
    refAllFilterButton.current.classList.add('active-filter-button')
    refUpTo100FilterButton.current.classList.remove('active-filter-button')
    refAbove100FilterButton.current.classList.remove('active-filter-button')
  }
  const handleUpToOneHundredPriceFilter = () => {
    if (filter !== 'UP_TO_100') {
      setFilter('UP_TO_100')
    }
    refUpTo100FilterButton.current.classList.add('active-filter-button')
    refAllFilterButton.current.classList.remove('active-filter-button')
    refAbove100FilterButton.current.classList.remove('active-filter-button')
  }
  const handleAboveOneHundredPriceFilter = () => {
    if (filter !== 'ABOVE_100') {
      setFilter('ABOVE_100')
    }
    refAbove100FilterButton.current.classList.add('active-filter-button')
    refAllFilterButton.current.classList.remove('active-filter-button')
    refUpTo100FilterButton.current.classList.remove('active-filter-button')
  }

  return (
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
              className={classes.poperStyle}
            >
              {({ TransitionProps }) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Fade {...TransitionProps} timeout={500}>
                  <Paper className={classes.paperStyle}>
                    <div className={classes.typography}>
                      <Typography className={classes.buttonStyle}>
                        Sort By:
                      </Typography>
                      <FilterItemButton title="All" color="primary" />
                      <FilterItemButton title="Popularity" />
                      <FilterItemButton title="Newness" />
                    </div>
                    <div className={classes.typography}>
                      <Typography className={classes.buttonStyle}>
                        Price:
                      </Typography>
                      <Button
                        variant="outlined"
                        className={`active-filter-button ${classes.buttonStyle}`}
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
                      <FilterItemButton title="All" color="primary" />
                      <FilterItemButton title="GUCCI" />
                      <FilterItemButton title="Nike" />
                      <FilterItemButton title="Adidas" />
                    </div>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
    </div>
  )
}

export default FilterSection
