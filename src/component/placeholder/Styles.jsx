import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  customPlaceholder: {
    margin: '11px',
    cursor: 'pointer',
  },
  imagePlaceholder: {
    width: '270px !important',
    height: '335px !important',
    marginBottom: '20px',
  },
  namePlaceholder: {
    width: '200px !important',
    marginBottom: '20px',
  },
  descriptionPlaceholder: {
    width: '270px !important',
    marginBottom: '20px',
  },
  pricePlaceholder: {
    width: '50px !important',
    marginBottom: '10px',
  },
}))

export default useStyles
