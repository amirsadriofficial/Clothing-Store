import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
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
import { SIGN_UP_SUCCESS_ACTION } from '../../redux/account/Action'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'red',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkText: {
    color: 'blue',
  },
}))

const SignUp = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
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
    // console.log('Form Info: ', formValue)
    // console.log('Password: ', passwordValue)
    dispatch(SIGN_UP_SUCCESS_ACTION(formValue))
    history.push('/')
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
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2" className={classes.linkText}>
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
        <Link to="/">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<HomeOutlinedIcon />}
            fullWidth
          >
            Back To Home
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default SignUp
