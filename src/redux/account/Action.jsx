import Types from './Types'

// SIGN IN
const SIGN_IN_STARTED_ACTION = () => {
  return {
    type: Types.SIGN_IN_STARTED,
    logged: false,
    loading: true,
  }
}
const SIGN_IN_SUCCESS_ACTION = () => {
  return {
    type: Types.SIGN_IN_SUCCESS,
    logged: true,
    loading: false,
    response: 'You have successfully entered!',
  }
}
const SIGN_IN_FAILED_ACTION = () => {
  return {
    type: Types.SIGN_IN_FAILED,
    logged: false,
    loading: false,
    response: 'Your request is invalid, please try again!',
  }
}
// SIGN UP
const SIGN_UP_STARTED_ACTION = () => {
  return {
    type: Types.SIGN_UP_STARTED,
    logged: false,
    loading: true,
  }
}
const SIGN_UP_SUCCESS_ACTION = (formValue) => {
  return {
    type: Types.SIGN_UP_SUCCESS,
    fName: formValue.firstName,
    lName: formValue.lastName,
    email: formValue.email,
    logged: true,
    loading: false,
    response: 'You have successfully registered!',
  }
}
const SIGN_UP_FAILED_ACTION = () => {
  return {
    type: Types.SIGN_UP_FAILED,
    logged: false,
    loading: false,
    response: 'Your request is invalid, please try again!',
  }
}

export {
  SIGN_IN_STARTED_ACTION,
  SIGN_IN_SUCCESS_ACTION,
  SIGN_IN_FAILED_ACTION,
  SIGN_UP_STARTED_ACTION,
  SIGN_UP_SUCCESS_ACTION,
  SIGN_UP_FAILED_ACTION,
}
