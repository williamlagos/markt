import { combineReducers } from 'redux'
import navigate from './navigate'
import fetch from './fetch'
import cart from './cart'

const vupitApp = combineReducers({ navigate, fetch, cart })

export default vupitApp
