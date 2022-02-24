import Types from './Types'

const cartReducer = (state = { carts: [] }, action) => {
  let newCarts = []
  switch (action.type) {
    case Types.ADD_TO_CART:
      newCarts = [...state.carts, action.product]
      localStorage.setItem('Carts', JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
      }
    case Types.REMOVE_FROM_CART: {
      newCarts = state.carts
      const afterRemovedList = newCarts.filter(
        (product) => product === action.product.id
      )
      localStorage.setItem('Carts', JSON.stringify(afterRemovedList))
      return {
        ...state,
        carts: afterRemovedList,
      }
    }
    default:
      return state
  }
}

export default cartReducer
