import { makeStyles } from '@material-ui/core/styles'
import Background from '../../assets/images/background/about-bg.jpg'

const useStyles = makeStyles({
  background: {
    width: '100%',
    height: '240px',
    backgroundImage: `url(${Background})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '50px',
    color: '#fff',
  },
  container: {
    marginBottom: '75px',
    marginTop: '75px',
  },
  imgSection: {
    width: '100%',
    maxWidth: '625px',
    maxHeight: '625px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: '90%',
    height: '90%',
    maxWidth: '500px',
    maxHeight: '400px',
    marginBottom: '100px',
  },
  backgroundImage: {
    width: '90%',
    height: '90%',
    maxWidth: '500px',
    maxHeight: '400px',
    border: '3px solid #888',
    position: 'absolute',
    top: '30px',
    right: '40px',
    zIndex: '-1',
  },
  backgroundImageXs: {
    width: '80%',
    height: '80%',
    maxWidth: '500px',
    maxHeight: '400px',
    border: '3px solid #666',
    position: 'absolute',
    top: '20px',
    right: '15px',
    zIndex: '-1',
  },
  titleSection: {
    fontSize: '25px',
  },
  textSubSection: {
    borderLeft: '3px solid #888',
    paddingLeft: '20px',
  },
})

export default useStyles
