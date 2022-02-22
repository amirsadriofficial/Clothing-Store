import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  responsive: {
    width: '100%',
    height: 'auto',
  },
  descriptionPosition: {
    position: 'absolute',
    bottom: '250px',
    left: '125px',
  },
  descriptionPositionLg: {
    position: 'absolute',
    bottom: '200px',
    left: '100px',
  },
  descriptionPositionMd: {
    position: 'absolute',
    bottom: '150px',
    left: '75px',
  },
  descriptionPositionSm: {
    position: 'absolute',
    bottom: '90px',
    left: '40px',
  },
  descriptionFont: {
    fontSize: '50px',
  },
  descriptionFontLg: {
    fontSize: '35px',
  },
  descriptionFontMd: {
    fontSize: '25px',
  },
  descriptionFontSm: {
    fontSize: '15px',
  },
  buttonStyle: {
    backgroundColor: '#717fe0',
    borderRadius: '25px',
  },
  // textAnimation: {
  //   webkitAnimation:
  //     'tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both',
  //   animation:
  //     'tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both',
  // },
}))

export default useStyles
