import Types from './Types'

const accountReducer = (state = [], action) => {
  switch (action.type) {
    // Sign In
    case Types.SIGN_IN_STARTED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
      }
    case Types.SIGN_IN_SUCCESS:
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
      return {
        ...state,
        firstName: action.fName,
        lastName: action.lName,
        email: action.email,
        logged: action.logged,
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
      return {
        ...state,
        logged: action.logged,
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
