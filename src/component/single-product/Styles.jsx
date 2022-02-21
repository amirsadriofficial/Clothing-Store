import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    paddingLeft: '10px',
    paddingBottom: '25px',
  },
  productName: {
    fontSize: '35px',
    marginTop: '0px',
    marginBottom: '10px',
  },
  labelStyle: {
    paddingLeft: '10px',
  },
  button: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
  },
  imgGrid: { marginRight: '15px' },
}))

export default useStyles
