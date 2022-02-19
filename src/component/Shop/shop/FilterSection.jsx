import React from 'react'
import Button from '@material-ui/core/Button'
import FilterListIcon from '@material-ui/icons/FilterList'
import Popper from '@material-ui/core/Popper'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import useStyles from './Styles'

const FilterSection = () => {
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
                        className={`'active-filter-button' ${classes.buttonStyle}`}
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
  )
}

export default FilterSection
