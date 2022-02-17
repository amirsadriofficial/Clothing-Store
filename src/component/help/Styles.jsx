import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '25px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    textAlign: 'center',
    marginTop: '25px',
    marginBottom: '50px',
  },
  accordionStyle: {
    '&:hover': {
      background: '#6c7ae0',
      color: '#fff',
    },
  },
}))

export default useStyles
