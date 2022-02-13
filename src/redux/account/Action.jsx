import Types from './Types'

// Sign In
const SIGN_IN_STARTED_ACTION = () => {
  return {
    type: Types.SIGN_IN_STARTED,
    logged: false,
    loading: true,
  }
}
const SIGN_IN_SUCCESS_ACTION = (formValue) => {
  return {
    type: Types.SIGN_IN_SUCCESS,
    fName: 'Amir',
    lName: 'Sadri',
    email: formValue.email,
    logged: true,
    loading: false,
    response: 'You have successfully signed in!',
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
// Sign Up
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
    response: 'You have successfully signed up!',
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
// Sign Out
const SIGN_OUT_STARTED_ACTION = () => {
  return {
    type: Types.SIGN_OUT_STARTED,
    logged: true,
    loading: true,
  }
}
const SIGN_OUT_SUCCESS_ACTION = () => {
  return {
    type: Types.SIGN_OUT_SUCCESS,
    logged: false,
    loading: false,
    response: 'You have successfully signed out!',
  }
}
const SIGN_OUT_FAILED_ACTION = () => {
  return {
    type: Types.SIGN_OUT_FAILED,
    logged: true,
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
  SIGN_OUT_STARTED_ACTION,
  SIGN_OUT_SUCCESS_ACTION,
  SIGN_OUT_FAILED_ACTION,
}
