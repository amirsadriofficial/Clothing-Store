import { makeStyles } from '@material-ui/core/styles'
import Background from '../../assets/images/background/contact-bg.jpg'

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
  sectionStyle: {
    border: '1px solid #e6e6e6',
  },
  firstSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstSectionStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  secondSubSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '30px',
  },
  flexSubSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  titleSection: {
    fontSize: '25px',
    marginBottom: '25px',
  },
  objectSubSection: {
    marginBottom: '20px',
  },
  buttonSubSection: {
    marginBottom: '20px',
    '&:hover': {
      background: '#000',
    },
  },
  titleSubSection: {
    marginTop: '0px',
    fontSize: '18px',
    marginBottom: '0px',
    paddingLeft: '10px',
  },
  textSubSection: {
    color: '#717fe0',
    cursor: 'pointer',
  },
})

export default useStyles
