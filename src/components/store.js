import {createStore,applyMiddleware} from 'redux'
import {FirstReducer} from './Reducer'
import thunk from 'redux-thunk'

 const ReduxStore = createStore(FirstReducer,applyMiddleware(thunk))
 export default ReduxStore