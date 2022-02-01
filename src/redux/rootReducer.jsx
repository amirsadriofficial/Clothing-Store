import { combineReducers } from 'redux'
import cartReducer from './cart/Reducer'
import favoritesReducer from './favorites/Reducer'

export default combineReducers({
  cartReducer,
  favoritesReducer,
})
