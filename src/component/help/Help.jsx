import React from 'react'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './Styles'

const AccordionComponent = (data) => {
  const classes = useStyles()
  const { title } = data

  return (
    <Accordion className={classes.accordionStyle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

const Help = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <h2>Have Any Questions?</h2>
      <div className={classes.root}>
        <AccordionComponent title="Where is My Stuff?" />
        <AccordionComponent title="Managing Your Orders" />
        <AccordionComponent title="Account Settings & Payment" />
        <AccordionComponent title="Returns & Refunds" />
        <AccordionComponent title="Shipping Policies" />
        <AccordionComponent title="Amazon Devices" />
        <AccordionComponent title="Digital Services & Content" />
        <AccordionComponent title="Amazon Business Accounts" />
        <AccordionComponent title="Other Topics & Help Sites" />
        <AccordionComponent title="Need More Help?" />
      </div>
    </Container>
  )
}

export default Help
