import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rootReducers from '../features/reducers'

export default combineReducers({
  form: formReducer,
  ...rootReducers,
})