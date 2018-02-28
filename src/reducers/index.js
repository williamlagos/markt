import { combineReducers } from 'redux'
import navigate from './navigate'
import fetch from './fetch'

const vupitApp = combineReducers({ navigate, fetch })

export default vupitApp
