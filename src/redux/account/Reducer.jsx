import Types from './Types'

const accountReducer = (state = [], action) => {
  let signinLogged = null
  let signupLogged = null
  let signoutLogged = null
  switch (action.type) {
    // Sign In
    case Types.SIGN_IN_STARTED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
      }
    case Types.SIGN_IN_SUCCESS:
      signinLogged = action.logged
      localStorage.setItem('Logged', JSON.stringify(signinLogged))
      return {
        ...state,
        firstName: action.fName,
        lastName: action.lName,
        email: action.email,
        logged: action.logged,
        loading: action.loading,
        response: action.response,
      }
    case Types.SIGN_IN_FAILED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        response: action.response,
      }
    // Sign Up
    case Types.SIGN_UP_STARTED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
      }
    case Types.SIGN_UP_SUCCESS:
      signupLogged = action.logged
      localStorage.setItem('Logged', JSON.stringify(signupLogged))
      return {
        ...state,
        firstName: action.fName,
        lastName: action.lName,
        email: action.email,
        logged: signupLogged,
        loading: action.loading,
        response: action.response,
      }
    case Types.SIGN_UP_FAILED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        response: action.response,
      }
    // Sign Out
    case Types.SIGN_OUT_STARTED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
      }
    case Types.SIGN_OUT_SUCCESS:
      signoutLogged = action.logged
      localStorage.setItem('Logged', JSON.stringify(signoutLogged))
      return {
        ...state,
        logged: signoutLogged,
        loading: action.loading,
        response: action.response,
      }
    case Types.SIGN_OUT_FAILED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        response: action.response,
      }
    default:
      return state
  }
}

export default accountReducer
