import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducers/reducer'
import cartReducer from './reducers/reducer2'

const rootReducer = combineReducers({
  reducer,
  cartReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))