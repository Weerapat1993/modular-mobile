import { SET_LOCAL_STORAGE, GET_LOCAL_STORAGE } from './storageActionTypes'

// InititalState
export const initialState = {}
export const setItem = (state, action) => {
  const { key } = action
  let value = action.value
  if(value && (value.includes('{') || value.includes('['))) {
    value = JSON.parse(value)
  }
  return {
    ...state,
    [key]: value
  }
}

export const storageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCAL_STORAGE:
      return setItem(state, action)
    case GET_LOCAL_STORAGE:
      return setItem(state, action)
    default:
      return state
  }
}
