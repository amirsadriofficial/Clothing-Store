import React from 'react'
import Box from '@material-ui/core/Box'
import InputBase from '@material-ui/core/InputBase'
// import SearchIcon from '@material-ui/icons/Search'
// import CloseIcon from '@material-ui/icons/Close'
import useStyles from './Styles'

const SearchInput = ({ setSearchTerm, setIsOpen }) => {
  const classes = useStyles()

  return (
    <Box className={classes.search}>
      {/* <div className={classes.searchIcon}>
        {searchTerm === '' ? <SearchIcon /> : <CloseIcon />}
      </div> */}
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(event) => setSearchTerm(event.target.value)}
        onClick={() => setIsOpen(true)}
      />
    </Box>
  )
}

export default SearchInput
