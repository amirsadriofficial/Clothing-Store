import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  root: {
    width: '100%',
    height: '100%',
  },
  media: {
    width: '140px',
    height: '140px',
  },
  priceText: {
    paddingTop: '10px',
    color: '#000',
    fontSize: '16px',
  },
  cardArea: {
    display: ' flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
  },
  cardAction: {
    padding: '10px',
  },
  pageTitleText: {
    margin: '0',
    fontSize: '35px',
  },
  pageTitle: {
    borderBottom: '1px solid #515151;',
  },
  EmptySection: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default useStyles
