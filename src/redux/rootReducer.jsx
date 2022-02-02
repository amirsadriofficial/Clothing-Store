import { combineReducers } from 'redux'
import accountReducer from './account/Reducer'
import cartReducer from './cart/Reducer'
import favoritesReducer from './favorites/Reducer'

export default combineReducers({
  accountReducer,
  cartReducer,
  favoritesReducer,
})
