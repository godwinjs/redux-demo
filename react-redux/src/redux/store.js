import { configureStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = configureStore(cakeReducer)

export default store