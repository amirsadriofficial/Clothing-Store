import Types from './Types'

// SIGN IN
const SIGN_IN_STARTED_ACTION = () => {
  return {
    type: Types.SIGN_IN_STARTED,
  }
}
const SIGN_IN_SUCCESS_ACTION = () => {
  return {
    type: Types.SIGN_IN_SUCCESS,
  }
}
const SIGN_IN_FAILED_ACTION = () => {
  return {
    type: Types.SIGN_IN_FAILED,
  }
}
// SIGN UP
const SIGN_UP_STARTED_ACTION = () => {
  return {
    type: Types.SIGN_UP_STARTED,
  }
}
const SIGN_UP_SUCCESS_ACTION = () => {
  return {
    type: Types.SIGN_UP_SUCCESS,
  }
}
const SIGN_UP_FAILED_ACTION = () => {
  return {
    type: Types.SIGN_UP_FAILED,
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
