import { alpha, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    paddingRight: '8px',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },
  menuStyle: {
    marginLeft: '10px',
  },
  productImage: {
    width: '50px',
    height: '50px',
  },
  productName: {
    fontSize: '15px',
  },
  searchBoxTitle: {
    fontSize: '15px',
    paddingTop: '15px',
    paddingLeft: '15px',
  },
  iconButtonStyle: {
    padding: '0',
  },
  searchCard: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchProducts: {
    width: '200px',
    position: 'relative',
    left: '1000px',
    zIndex: '2',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '15px !important',
  },
}))

export default useStyles
