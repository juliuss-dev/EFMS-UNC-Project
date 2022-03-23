import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import messageReducer from './reducers/messageReducer'
import reservationReducer from './reducers/reservationReducer'
import loadingReducer from './reducers/loadingReducer'

const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer, 
    reservation: reservationReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;