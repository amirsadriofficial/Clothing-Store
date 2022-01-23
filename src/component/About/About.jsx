import React from 'react'

const About = () => {
  return (
    <>
      <div className={classes.background}>
        <h2 className={classes.title}>Contact</h2>
      </div>
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={6}
            className={clsx(classes.sectionStyle, classes.firstSectionStyle)}
          >
            <Grid item xs={9} className={classes.firstSection}>
              <h3 className={classes.titleSection}>Send Us A Message</h3>
              <TextField
                className={classes.objectSubSection}
                id="outlined-textarea"
                label="Your Email Address"
                placeholder="email@example.com"
                multiline
                fullWidth
                variant="outlined"
              />
              <TextField
                className={classes.objectSubSection}
                id="outlined-textarea"
                label="How Can We Help?"
                placeholder="Write your opinion or problem for us"
                multiline
                rows={5}
                fullWidth
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.objectSubSection}
                style={{ borderRadius: '25px' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={clsx(classes.sectionStyle, classes.secondSection)}
          >
            <Grid className={classes.secondSubSection}>
              <LocationOnOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Address</h4>
                <p>
                  The Amazon Corporate Headquarters address is 410 Terry Ave N,
                  Seattle 98109, WA.
                </p>
              </Grid>
            </Grid>
            <Grid className={classes.secondSubSection}>
              <CallOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Lets Talk</h4>
                <p className={classes.textSubSection}>+1 888-280-4331</p>
              </Grid>
            </Grid>
            <Grid className={classes.secondSubSection}>
              <EmailOutlinedIcon />
              <Grid className={classes.flexSubSection}>
                <h4 className={classes.titleSubSection}>Sale Support</h4>
                <p className={classes.textSubSection}>cis@amazon.com</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default About
