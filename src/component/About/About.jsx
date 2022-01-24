import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../images/background/about-bg.jpg'
import Gallery1 from '../../images/gallery/about-01.jpg'
import Gallery2 from '../../images/gallery/about-02.jpg'

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
    top: '25px',
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

const About = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.background}>
        <h2 className={classes.title}>About</h2>
      </div>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={9} md={6} style={{ marginBottom: '50px' }}>
                <h4 className={classes.titleSection}>Our Story</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris consequat consequat enim, non auctor massa ultrices
                  non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                  tincidunt augue. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Maecenas varius
                  egestas diam, eu sodales metus scelerisque congue.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Maecenas gravida justo eu
                  arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum
                  eget, dictum enim. Donec non neque ut enim dapibus tincidunt
                  vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
                  condimentum euismod tortor, eget facilisis diam faucibus et.
                  Morbi a tempor elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris consequat consequat enim, non auctor massa ultrices
                  non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                  tincidunt augue.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Grid>
              <Hidden smUp>
                <Grid item xs={12} className={classes.imgSection}>
                  <img
                    src={Gallery1}
                    alt="Gallery1"
                    className={classes.imgStyle}
                  />
                  <div className={classes.backgroundImageXs} />
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <Grid item xs={12} sm={9} md={6} className={classes.imgSection}>
                  <img
                    src={Gallery1}
                    alt="Gallery1"
                    className={classes.imgStyle}
                  />
                  <div className={classes.backgroundImage} />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
          <Hidden mdUp>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={9}
                  md={6}
                  style={{ marginBottom: '50px' }}
                >
                  <h4 className={classes.titleSection}>Our Mission</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris consequat consequat enim, non auctor massa ultrices
                    non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                    tincidunt augue. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Maecenas varius
                    egestas diam, eu sodales metus scelerisque congue.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Maecenas gravida justo eu
                    arcu egestas convallis. Nullam eu erat bibendum, tempus
                    ipsum eget, dictum enim. Donec non neque ut enim dapibus
                    tincidunt vitae nec augue. Suspendisse potenti. Proin ut est
                    diam. Donec condimentum euismod tortor, eget facilisis diam
                    faucibus et. Morbi a tempor elit.
                  </p>
                  <div className={classes.textSubSection}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris consequat consequat enim, non auctor massa ultrices
                      non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                      tincidunt augue.
                    </p>
                    <h5>- Jeff Bezos</h5>
                  </div>
                </Grid>
                <Hidden smUp>
                  <Grid item xs={12} className={classes.imgSection}>
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImageXs} />
                  </Grid>
                </Hidden>
                <Hidden xsDown>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    md={6}
                    className={classes.imgSection}
                  >
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImage} />
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Hidden smUp>
                  <Grid item xs={12} className={classes.imgSection}>
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImageXs} />
                  </Grid>
                </Hidden>
                <Hidden xsDown>
                  <Grid
                    item
                    xs={12}
                    sm={9}
                    md={6}
                    className={classes.imgSection}
                  >
                    <img
                      src={Gallery2}
                      alt="Gallery 2"
                      className={classes.imgStyle}
                    />
                    <div className={classes.backgroundImage} />
                  </Grid>
                </Hidden>
                <Grid
                  item
                  xs={12}
                  sm={9}
                  md={6}
                  style={{ marginBottom: '50px' }}
                >
                  <h4 className={classes.titleSection}>Our Mission</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris consequat consequat enim, non auctor massa ultrices
                    non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                    tincidunt augue. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Maecenas varius
                    egestas diam, eu sodales metus scelerisque congue.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Maecenas gravida justo eu
                    arcu egestas convallis. Nullam eu erat bibendum, tempus
                    ipsum eget, dictum enim. Donec non neque ut enim dapibus
                    tincidunt vitae nec augue. Suspendisse potenti. Proin ut est
                    diam. Donec condimentum euismod tortor, eget facilisis diam
                    faucibus et. Morbi a tempor elit.
                  </p>
                  <div className={classes.textSubSection}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris consequat consequat enim, non auctor massa ultrices
                      non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                      tincidunt augue.
                    </p>
                    <h5>- Jeff Bezos</h5>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  )
}

export default About
