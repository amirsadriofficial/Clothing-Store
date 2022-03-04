import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '270px',
    height: '100%',
  },
  media: {
    width: '100%',
    height: '335px',
  },
  priceText: {
    paddingTop: '10px',
    color: '#000',
    fontSize: '16px',
  },
  bodySection: {
    marginTop: '50px',
    marginBottom: '50px',
    backgroundColor: '#f5f5f5',
  },
  carouselStyle: {
    paddingBottom: '30px',
    marginLeft: '30px',
  },
  titleText: {
    marginLeft: '30px',
    fontSize: '25px',
    paddingTop: '30px',
    paddingBottom: '10px',
    borderBottom: '2px solid #717fe0',
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20px',
  },
  buttonHover: {
    '&:hover': {
      background: '#000',
    },
  },
})

export default useStyles
