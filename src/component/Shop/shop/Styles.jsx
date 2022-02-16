import { makeStyles } from '@material-ui/core/styles'

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

export default useStyles
