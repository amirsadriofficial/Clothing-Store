import Types from './Types'

const accountReducer = (state = [], action) => {
  switch (action.type) {
    // case Types.SIGN_IN_STARTED:
    //   return {
    //     ...state,
    //     logged: false,
    //     loading: true,
    //   }
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
    // case Types.SIGN_IN_FAILED:
    //   return {
    //     ...state,
    //     logged: false,
    //     loading: false,
    //     response: 'Your request is invalid, please try again!',
    //   }
    // case Types.SIGN_UP_STARTED:
    //   return {
    //     ...state,
    //     logged: false,
    //     loading: true,
    //   }
    // case Types.SIGN_UP_SUCCESS:
    //   return {
    //     ...state,
    //     logged: true,
    //     loading: false,
    //     response: 'You have successfully registered!',
    //   }
    // case Types.SIGN_UP_FAILED:
    //   return {
    //     ...state,
    //     logged: false,
    //     loading: false,
    //     response: 'Your request is invalid, please try again!',
    //   }
    default:
      return state
  }
}

export default accountReducer
