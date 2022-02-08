import Types from './Types'

export const UP_TO_ONE_HUNDRED_PRICE_ACTION = (status) => {
  return {
    type: Types.UP_TO_ONE_HUNDRED_PRICE,
    price: status,
  }
}

export const ABOVE_ONE_HUNDRED_PRICE_ACTION = (status) => {
  return {
    type: Types.ABOVE_ONE_HUNDRED_PRICE,
    price: status,
  }
}
