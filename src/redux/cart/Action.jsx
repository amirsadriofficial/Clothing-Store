import Types from './Types'

export const addToCart = () => {
  return {
    type: Types.ADD_TO_CART,
  }
}

export const removeFromCart = () => {
  return {
    type: Types.REMOVE_FROM_CART,
  }
}
