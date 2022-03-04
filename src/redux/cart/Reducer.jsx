import Types from './Types'

const cartReducer = (state = { carts: [] }, action) => {
  let newCarts = []
  switch (action.type) {
    case Types.ADD_TO_CART:
      newCarts = [...state.carts, action.product]
      return {
        ...state,
        carts: newCarts,
      }
    case Types.REMOVE_FROM_CART: {
      newCarts = state.carts
      newCarts.splice(
        state.carts.findIndex((product) => product === action.product),
        1
      )
      return {
        ...state,
        carts: newCarts,
      }
    }
    default:
      return state
  }
}

export default cartReducer
