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
  }
}
// Sign Out
const SIGN_OUT_SUCCESS_ACTION = () => {
  return {
    type: Types.SIGN_OUT_SUCCESS,
    logged: false,
  }
}

export {
  SIGN_IN_SUCCESS_ACTION,
  SIGN_UP_SUCCESS_ACTION,
  SIGN_OUT_SUCCESS_ACTION,
}
