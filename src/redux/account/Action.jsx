import Types from './Types'

// Sign In
const SIGN_IN_SUCCESS_ACTION = (formValue) => {
  return {
    type: Types.SIGN_IN_SUCCESS,
    fName: 'Amir',
    lName: 'Sadri',
    email: formValue.email,
    deposit: 420,
    logged: true,
    loading: false,
    response: 'You have successfully signed in!',
  }
}
// Sign Up
const SIGN_UP_SUCCESS_ACTION = (formValue) => {
  return {
    type: Types.SIGN_UP_SUCCESS,
    fName: formValue.firstName,
    lName: formValue.lastName,
    email: formValue.email,
    deposit: 0.0,
    logged: true,
    loading: false,
    response: 'You have successfully signed up!',
  }
}
// Sign Out
const SIGN_OUT_SUCCESS_ACTION = () => {
  return {
    type: Types.SIGN_OUT_SUCCESS,
    logged: false,
    loading: false,
    response: 'You have successfully signed out!',
  }
}

export {
  SIGN_IN_SUCCESS_ACTION,
  SIGN_UP_SUCCESS_ACTION,
  SIGN_OUT_SUCCESS_ACTION,
}
