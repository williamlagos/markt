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
const store = createStore(vupitApp, { fetch: { url: 'https://brauerei.herokuapp.com', admin: '2929cf7fcc876bebeda22b3dc4fcd5154754d1e0' } }, enhancer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
