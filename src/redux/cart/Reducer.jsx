import Types from './Types'

const cartReducer = (state = { carts: [] }, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        ...state,
        // product: action.cart,
        carts: [...state.carts, action.cart],
        // id: action.id,
        // name: action.name,
        // description: action.description,
        // image: action.Image,
        // price: action.price,
      }
    case Types.REMOVE_FROM_CART: {
      const newCarts = state.carts
      newCarts.splice(
        state.carts.findIndex((id) => id === action.id),
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
