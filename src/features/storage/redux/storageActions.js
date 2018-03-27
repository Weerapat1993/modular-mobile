import { AsyncStorage } from 'react-native'
import { SET_LOCAL_STORAGE, GET_LOCAL_STORAGE, GET_ALL_KEY_LOCAL_STORAGE } from './storageActionTypes'

class LocalStorage {
  static getItem = (key) => (dispatch, getState) => (
    AsyncStorage.getItem(key)
      .then(value => dispatch({ type: GET_LOCAL_STORAGE, key, value }))
      .catch(error => console.warn(`Error: ${error.message}`))
  )

  static setItem = (key, value) => (dispatch, getState) => (
    AsyncStorage.setItem(key, value)
      .then(() => dispatch({ type: SET_LOCAL_STORAGE, key, value }))
      .catch(error => console.warn(`Error: ${error.message}`))
  )

  static getAllKeys = () => (dispatch, getState) => {
    const keys = Object.keys(getState().storage.keys)
    if(!keys.length) {
      AsyncStorage.getAllKeys()
        .then(keys => {
          AsyncStorage.multiGet(keys)
            .then(data => dispatch({ type: GET_ALL_KEY_LOCAL_STORAGE, data }))
            .catch(error => console.warn(`Error: ${error.message}`))
        })
        .catch(error => console.warn(`Error: ${error.message}`))
    }
  }
}

export const localStorage = {
  getItem: LocalStorage.getItem,
  setItem: LocalStorage.setItem,
  getAllKeys: LocalStorage.getAllKeys,
}