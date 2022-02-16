import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  containerSpacing: {
    marginTop: '80px',
    marginBottom: '80px',
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleGrid: {
    position: 'relative',
  },
  singleGridStyle: {
    border: '1px solid #e6e6e6',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  descriptionPosition: {
    position: 'absolute',
    top: '20px',
    left: '50px',
    fontSize: '18px',
  },
}))

export default useStyles
