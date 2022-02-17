import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#222',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColor: {
    color: '#b2b2b2',
    '&:hover': {
      color: '#6c7ae0',
    },
  },
  TextDifferentColor: {
    color: '#b2b2b2',
    cursor: 'pointer',
  },
  border: {
    paddingRight: '15px',
    paddingLeft: '15px',
    borderLeft: '1px solid rgba(255,255,255,0.3)',
  },
  aloneBorder: {
    borderRight: '1px solid rgba(255,255,255,0.3)',
  },
  sectionSpacing: {
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  dividerStyle: {
    width: '100% !importent',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  account: {
    color: '#44C0D8',
  },
}))

export default useStyles
