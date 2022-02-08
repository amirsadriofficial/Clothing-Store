import Types from './Types'

export const UP_TO_ONE_HUNDRED_PRICE_ACTION = (product) => {
  return {
    type: Types.UP_TO_ONE_HUNDRED_PRICE,
    product,
  }
}

export const ABOVE_ONE_HUNDRED_PRICE_ACTION = (product) => {
  return {
    type: Types.ABOVE_ONE_HUNDRED_PRICE,
    product,
  }
}

export const ALL_PRICE_ACTION = (product) => {
  return {
    type: Types.ALL_PRICE,
    product,
  }
}
