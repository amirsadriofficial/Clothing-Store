import React from 'react'
import Box from '@material-ui/core/Box'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from './Styles'

const SearchInput = ({ searchTerm, setSearchTerm, setIsOpen }) => {
  const classes = useStyles()

  return (
    <Box className={classes.search}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        startAdornment={
          searchTerm === '' ? (
            <SearchIcon className={classes.searchIcon} />
          ) : (
            <CloseIcon className={classes.searchIcon} />
          )
        }
        inputProps={{ 'aria-label': 'search' }}
        onChange={(event) => setSearchTerm(event.target.value)}
        onClick={() => setIsOpen(true)}
      />
    </Box>
  )
}

export default SearchInput
