import Types from './Types'

export const ADD_TO_CART_ACTION = (product) => {
  return {
    type: Types.ADD_TO_CART,
    cart: product,
    // name: product.name,
    // description: product.description,
    // image: product.Image,
    // price: product.price,
  }
}

export const REMOVE_FROM_CART_ACTION = () => {
  return {
    type: Types.REMOVE_FROM_CART,
    // id: product.id,
    // name: product.name,
    // description: product.description,
    // image: product.Image,
    // price: product.price,
  }
}
