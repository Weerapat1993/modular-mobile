import { AsyncStorage } from 'react-native'
import { 
  SET_LOCAL_STORAGE, 
  GET_LOCAL_STORAGE, 
  GET_ALL_KEY_LOCAL_STORAGE,
  CLEAR_LOCAL_STORAGE,
} from './storageActionTypes'

// Get Error Message
const getError = error => console.error(`Error: ${error.message}`)

/**
 * @class LocalStorage
 * @example
 * import { withLocalStorage } from '../features/storage'
 * 
 * const Component = ({ storage, localStorage }) => (
 *   ...
 * )
 * 
 * export default withLocalStorage(Component)
 * @classdesc import data from `AsyncStorage` to redux store
 */
class LocalStorage {
  /**
   * Get item key in storage
   * @param {string} key field name in storage
   * @return {Promise}
   * @example
   * this.props.localStorage.getItem('key')
   */
  static getItem(key) {
    return (dispatch, getState) => (
      AsyncStorage.getItem(key)
        .then(value => dispatch({ type: GET_LOCAL_STORAGE, key, value }))
        .catch(error => getError(error))
    )
  }
  /**
   * Set item key in storage
   * @param {string} key field name in storage
   * @param {string} value value `string`
   * @return {Promise}
   * @example
   * this.props.localStorage.setItem('key', '1234')
   */
  static setItem(key, value) {
    return (dispatch, getState) => (
    AsyncStorage.setItem(key, value)
      .then(() => dispatch({ type: SET_LOCAL_STORAGE, key, value }))
      .catch(error => getError(error))
    )
  }

  /**
   * get all keys in storage
   * @return {Promise}
   * @example
   * this.props.localStorage.getAllKeys()
   */
  static getAllKeys() {
    return (dispatch, getState) => {
      const { storage } = getState()
      if(storage.isReload) {
        return AsyncStorage.getAllKeys()
          .then(keys => {
            AsyncStorage.multiGet(keys)
              .then(data => dispatch({ type: GET_ALL_KEY_LOCAL_STORAGE, data }))
              .catch(error => getError(error))
          })
          .catch(error => getError(error))
      }
    }
  }

  /**
   * clear all data in storage
   * @return {Promise}
   * @example
   * this.props.localStorage.clear()
   */
  static clear() {
    return (dispatch, getState) => (
      Object.keys(getState().storage.keys).length && (
        AsyncStorage.clear()
          .then(() => dispatch({ type: CLEAR_LOCAL_STORAGE }))
          .catch(error => getError(error))
      )
    )
  }
}

export const localStorage = {
  getItem: LocalStorage.getItem,
  setItem: LocalStorage.setItem,
  getAllKeys: LocalStorage.getAllKeys,
  clear: LocalStorage.clear,
}