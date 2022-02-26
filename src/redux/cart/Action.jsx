import Types from './Types'

export const ADD_TO_CART_ACTION = (product) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    qty: 0,
  }
}

export const REMOVE_FROM_CART_ACTION = (product) => {
  return {
    type: Types.REMOVE_FROM_CART,
    product,
    qty: 1,
  }
}
