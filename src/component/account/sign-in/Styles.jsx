import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'red',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&:hover': {
      background: '#000',
    },
  },
  submitLoading: {
    margin: theme.spacing(3, 0, 2),
  },
  linkText: {
    color: 'blue',
  },
  errorText: {
    color: 'red',
  },
  circularProgress: {
    color: 'blue',
    marginRight: '10px',
  },
}))

export default useStyles
