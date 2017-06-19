import { applyMiddleware, createStore } from 'redux'
import * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers'

const logger = (createLogger as any)()
const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)