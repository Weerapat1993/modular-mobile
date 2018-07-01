import { Reducer, classReducer, reducerCreator } from '../../../utils'
import { convertJSON } from './storageUtils'
import {  } from '.'
import { 
  SET_LOCAL_STORAGE, 
  GET_LOCAL_STORAGE, 
  GET_ALL_KEY_LOCAL_STORAGE, 
  CLEAR_LOCAL_STORAGE,
} from './storageActionTypes'

export const initialState = {
  isReload: true,
  keys: {},
}

export const storageReducer = (state = initialState, action) => {
  // Action Value
  const { keys } = state
  const { type, key, value } = action
  // Reducer Creator
  const { setState } = reducerCreator(state, action)
  const setItem = () => setState({
    keys: {
      ...keys,
      [key]: convertJSON(value)
    }
  })
  const getAllItem = () => {
    const store = {}
    const { data } = action
    data.forEach(item => {
      store[item[0]] = convertJSON(item[1])
    })
    return {
      isReload: false,
      keys: store
    }
  }
  
  // Switch Case
  switch (type) {
    case GET_ALL_KEY_LOCAL_STORAGE:
      return getAllItem()
    case SET_LOCAL_STORAGE:
      return setItem()
    case GET_LOCAL_STORAGE:
      return setItem()
    case CLEAR_LOCAL_STORAGE:
      return setState({ keys: {} })
    default:
      return state
  }
}