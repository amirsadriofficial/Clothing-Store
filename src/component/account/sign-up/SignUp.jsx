import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
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
import Container from '@material-ui/core/Container'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Swal from 'sweetalert2'
import CircularProgress from '@material-ui/core/CircularProgress'
import { SIGN_UP_SUCCESS_ACTION } from '../../../redux/account/Action'
import useStyles from './Styles'

const SignUp = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = () => {
    if (formValue !== '' && passwordValue !== '') {
      setLoading(true)
      setTimeout(() => {
        dispatch(SIGN_UP_SUCCESS_ACTION(formValue))
        history.push('/')
        Swal.fire(
          `Welcome ${formValue.firstName}!`,
          'You have successfully signed up!',
          'success'
        )
        setLoading(false)
      }, 2000)
    }
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
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="outlined-adornment-firstName">
                First Name *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-firstName"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('firstName', { required: true })}
                type="fname"
                autoComplete="fname"
                autoFocus
                fullWidth
                labelWidth={80}
                onChange={(value) => handleChangeInputs('firstName', value)}
              />
              {errors.firstName ? (
                <p className={classes.errorText}>First name is required.</p>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="outlined-adornment-lastName">
                Last Name *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-lastName"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('lastName', { required: true })}
                type="lname"
                autoComplete="lname"
                fullWidth
                labelWidth={80}
                onChange={(value) => handleChangeInputs('lastName', value)}
              />
              {errors.lastName ? (
                <p className={classes.errorText}>Last name is required.</p>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="outlined-adornment-email">
                Email Address *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('email', { required: true })}
                type="email"
                autoComplete="email"
                fullWidth
                labelWidth={110}
                onChange={(value) => handleChangeInputs('email', value)}
              />
              {errors.email ? (
                <p className={classes.errorText}>Email is required.</p>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('password', { required: true })}
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
              {errors.password ? (
                <p className={classes.errorText}>Password is required.</p>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          {loading === false ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled
              className={classes.submitLoading}
              onClick={handleSubmit(onSubmit)}
            >
              <CircularProgress
                size={30}
                className={classes.circularProgress}
              />
              Loading...
            </Button>
          )}
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
            Back Home
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default SignUp
