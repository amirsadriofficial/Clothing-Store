import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
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
import { SIGN_IN_SUCCESS_ACTION } from '../../../redux/account/Action'
import useStyles from './Styles'

const SignIn = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [formValue, setFormValue] = useState({
    email: '',
  })
  const [passwordValue, setPasswordValue] = useState({
    password: '',
    showPassword: false,
  })
  const handleChangeInputs = (name, value) => {
    setFormValue({ ...formValue, [name]: value.target.value })
  }
  const handleChangePassword = (prop) => (event) => {
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
        dispatch(SIGN_IN_SUCCESS_ACTION(formValue))
        history.push('/')
        Swal.fire(
          `Welcome Amir!`,
          'You have successfully signed in!',
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
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor="outlined-adornment-email">
            Email Address *
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', { required: true })}
            type="email"
            fullWidth
            labelWidth={110}
            autoComplete="email"
            autoFocus
            style={{ marginBottom: '15px' }}
            onChange={(value) => handleChangeInputs('email', value)}
          />
          {errors.email ? (
            <p className={classes.errorText}>Email is required.</p>
          ) : (
            ''
          )}
          <InputLabel htmlFor="outlined-adornment-password">
            Password *
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', { required: true })}
            type={passwordValue.showPassword ? 'text' : 'password'}
            value={passwordValue.password}
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
            autoComplete="password"
            onChange={handleChangePassword('password')}
          />
          {errors.password ? (
            <p className={classes.errorText}>Password is required.</p>
          ) : (
            ''
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {loading === false ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
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
          <Grid container>
            <Grid item xs>
              <Link to="/404" variant="body2" className={classes.linkText}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2" className={classes.linkText}>
                Do not have an account? Sign Up
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

export default SignIn
