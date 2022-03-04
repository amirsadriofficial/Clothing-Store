import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#222',
  },
  flexIconPay: {
    marginTop: '50px',
    paddingBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexGridRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexGridColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextColor: {
    color: '#fff',
  },
  TextColor: {
    color: '#b2b2b2',
    textDecoration: 'none',
    '&:hover': {
      color: '#6c7ae0',
    },
  },
  TextDifferentColor: {
    color: '#b2b2b2',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  footerItem: {
    marginTop: '10px',
  },
  buttonStyle: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
    marginTop: '35px',
    marginBottom: '1px',
  },
  buttonSpacing: {
    paddingLeft: '0px',
  },
  spanColor: {
    color: '#007bff',
    paddingLeft: '5px',
  },
  buttonResponsiveStyle: {
    marginBottom: '30px',
  },
}))

export default useStyles
