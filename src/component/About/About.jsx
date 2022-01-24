import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import clsx from 'clsx'
import Background from '../../images/background/about-bg.jpg'
import Gallery1 from '../../images/gallery/about-01.jpg'

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
    position: 'relative',
  },
  imgStyle: {
    maxHeight: '400px',
    maxWidth: '500px',
    // marginRight: '30px',
    marginBottom: '30px',
  },
  backgroundImage: {
    width: '72%',
    height: '100%',
    border: '3px solid #666',
    // backgroundColor: 'blue',
    position: 'absolute',
    top: '0',
    left: '0',
    marginRight: '10px',
    // right: '10px',
    // left: '100px',
    // bottom: '100px',
    zIndex: '-1',
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
            <Grid item xs={6}>
              <h4>Our Story</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Grid>
            <Grid item xs={6} className={classes.imgSection}>
              <img src={Gallery1} alt="Gallery1" className={classes.imgStyle} />
              <div className={classes.backgroundImage} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={6}>
              picture 2
            </Grid>
            <Grid item xs={6}>
              <h4>Our Mission</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris consequat consequat enim, non auctor massa ultrices
                  non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                  tincidunt augue.
                </p>
                <h6>Jeff Bezos</h6>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default About
