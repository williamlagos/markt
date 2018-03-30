import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import vupitApp from './reducers'
import actionCreators from './actions'
import App from './containers/App'
import registerServiceWorker from './worker'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators })
const store = createStore(vupitApp, { fetch: { url: 'http://vupit.efforia.io', admin: '8292fd89dc3ed606f41b7f8e74e1a3ed2c4daf29' } }, enhancer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
