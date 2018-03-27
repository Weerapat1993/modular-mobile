import { AsyncStorage } from 'react-native'
import { SET_LOCAL_STORAGE, GET_LOCAL_STORAGE } from './storageActionTypes'
import { LOCAL_STORAGE } from './storageKey'
import { asyncForEach } from '../../../utils'

export const setStorage = (key, value) => ({ type: SET_LOCAL_STORAGE, key, value })
export const getStorage = (key, value) => ({ type: GET_LOCAL_STORAGE, key, value })
export const setLocalStorage = (key, value) => (dispatch, getState) => (
  AsyncStorage.setItem(key, value)
    .then(() => dispatch(setStorage(key, value)))
    .catch(error => console.warn(`Error: ${error.message}`))
)

export const getLocalStorage = key => (dispatch, getState) => (
  AsyncStorage.getItem(key)
    .then((value) => dispatch(getStorage(key, value)))
    .catch(error => console.warn(`Error: ${error.message}`))
    
)

export const getAllLocalStorage = () => (dispatch, getState) => {
  asyncForEach(LOCAL_STORAGE, async key => {
    const storageKey = Object.keys(getState().storage).filter(item => item === key).length
    if(!storageKey) {
      await dispatch(getLocalStorage(key))
    }
  })
}
