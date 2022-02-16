import Types from './Types'

const accountReducer = (state = [], action) => {
  let signinStorage = []
  let signupStorage = []
  let signoutStorage = []
  switch (action.type) {
    // Sign In
    case Types.SIGN_IN_STARTED:
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
      }
    case Types.SIGN_IN_SUCCESS:
      signinStorage = [
        {
          firstName: action.fName,
          lastName: action.lName,
          email: action.email,
          deposit: action.deposit,
          logged: action.logged,
        },
      ]
      localStorage.setItem('Account', JSON.stringify(signinStorage))
      return {
        ...state,
        firstName: signinStorage.firstName,
        lastName: signinStorage.lastName,
        email: signinStorage.email,
        deposit: signinStorage.deposit,
        logged: signinStorage.logged,
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
      signupStorage = [
        {
          firstName: action.fName,
          lastName: action.lName,
          email: action.email,
          deposit: action.deposit,
          logged: action.logged,
        },
      ]
      localStorage.setItem('Account', JSON.stringify(signupStorage))
      return {
        ...state,
        firstName: signupStorage.firstName,
        lastName: signupStorage.lastName,
        email: signupStorage.email,
        deposit: signupStorage.deposit,
        logged: signupStorage.logged,
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
      signoutStorage = [{ logged: action.logged }]
      localStorage.setItem('Account', JSON.stringify(signoutStorage))
      return {
        ...state,
        logged: signoutStorage.logged,
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
