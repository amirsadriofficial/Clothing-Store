import Types from './Types'

export const ADD_TO_CART_ACTION = (product) => {
  return {
    type: Types.ADD_TO_CART,
    carts: [],
    id: product.id,
  }
}

export const REMOVE_FROM_CART_ACTION = (product) => {
  return {
    type: Types.REMOVE_FROM_CART,
    carts: [],
    id: product.id,
  }
}
