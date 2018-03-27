import { AsyncStorage } from 'react-native'
import { SET_LOCAL_STORAGE, GET_LOCAL_STORAGE, GET_ALL_KEY_LOCAL_STORAGE } from './storageActionTypes'

/**
 * @class LocalStorage
 */
class LocalStorage {
  /**
   * Get item key in storage
   * @param {string} key field name in storage
   * @return {Promise}
   * @example
   * this.props.localStorage.getItem('key')
   */
  static getItem = (key) => (dispatch, getState) => (
    AsyncStorage.getItem(key)
      .then(value => dispatch({ type: GET_LOCAL_STORAGE, key, value }))
      .catch(error => console.warn(`Error: ${error.message}`))
  )
  /**
   * Set item key in storage
   * @param {string} key field name in storage
   * @param {string} value value `string`
   * @return {Promise}
   * @example
   * this.props.localStorage.setItem('key', '1234')
   */
  static setItem = (key, value) => (dispatch, getState) => (
    AsyncStorage.setItem(key, value)
      .then(() => dispatch({ type: SET_LOCAL_STORAGE, key, value }))
      .catch(error => console.warn(`Error: ${error.message}`))
  )

  /**
   * get all keys in storage
   * @return {Promise}
   * @example
   * this.props.localStorage.getAllKeys()
   */
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