import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import OutlinedInput from '@material-ui/core/OutlinedInput'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkButton: {
    color: '#fff',
    textDecoration: 'none',
  },
}))

const SignUp = () => {
  const classes = useStyles()
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [passwordValue, setPasswordValue] = useState({
    password: '',
    showPassword: false,
  })
  const handleChangeInputs = (name, value) => {
    setFormValue({ ...formValue, [name]: value.target.value })
  }
  const handleChange = (prop) => (event) => {
    setPasswordValue({ ...passwordValue, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setPasswordValue({
      ...passwordValue,
      showPassword: !passwordValue.showPassword,
    })
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('FormInfo: ', formValue)
    console.log('Password: ', passwordValue)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="outlined-adornment-firstName">
                First Name *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-firstName"
                name="firstName"
                type="fname"
                autoComplete="fname"
                autoFocus
                fullWidth
                labelWidth={80}
                onChange={(value) => handleChangeInputs('firstName', value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="outlined-adornment-lastName">
                Last Name *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-lastName"
                name="lastName"
                type="lname"
                autoComplete="lname"
                fullWidth
                labelWidth={80}
                onChange={(value) => handleChangeInputs('lastName', value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="outlined-adornment-email">
                Email Address *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                name="email"
                type="email"
                autoComplete="email"
                fullWidth
                labelWidth={110}
                onChange={(value) => handleChangeInputs('email', value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={passwordValue.showPassword ? 'text' : 'password'}
                value={passwordValue.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {passwordValue.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                fullWidth
                labelWidth={70}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box
        mt={8}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<HomeOutlinedIcon />}
        >
          <Link href="/" className={classes.linkButton}>
            Back To Home
          </Link>
        </Button>
      </Box>
    </Container>
  )
}

export default SignUp
