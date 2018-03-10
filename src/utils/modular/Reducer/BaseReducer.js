import _ from 'lodash'

export const classReducer = (ClassReducer) => (state, action) => new ClassReducer({ state, action })._setInitial().getState()

 /**
 * @class BaseReducer
 * @extends {Function}
 */
export class BaseReducer {
  /** 
   * @typedef {Object} State
   * @property {Object} [keys]
   * @property {Array.<string>} [byID]
   * 
   * @typedef {Object} StateWithKey
   * @property {boolean} [isFetching]
   * @property {boolean} [isReload]
   * @property {string} [error]
   * @property {*} [data]
   * 
   * @typedef {Object} Action
   * @property {string} type
   * @property {*} [data]
   * @property {string} [key]
   * @property {Error} [error]
   */

  /**
   * Reducer Constructor
   * @param {{ state: State, action: Action }} props
   */
  constructor(props) {
    this.initialState = {}
    /** @type {State} */
    this.state = props.state
    /** @type {Action} */
    this.action = props.action
    /** @type {string} */
    this.key = props.action.key
  }

  /** @private */
  _setInitial() {
    if(!this.state) {
      this.state = this.initialState
    }
    return this
  }

  /**
   * Get Error Message
   * @return {String} 
   */
  errorMessage() {
    const { error } = this.action
    return _.get(error, 'response.data.message') || error.message
  }

  /**
   * Set State
   * @param {StateWithKey} newState
   * @return {State}
   */
  setState(newState) {
    return {
      ...this.state,
      ...newState,
    }
  }

  /**
   * Set state withKey in Reducer
   * @param {StateWithKey} newState
   * @return {State}
   */
  setStateWithKey(newState) {
    return {
      ...this.state,
      keys: {
        ...this.state.keys,
        [this.key]: {
          ...this.state.keys[this.key],
          ...newState,
        }
      }
    }
  }

  /** 
   * Get state withKey in Reducer
   * @return {StateWithKey} 
   */
  getStateWithKey() {
    return this.state.keys[this.key]
  }

  /**
   * Get state in Reducer
   * @return {State}
   */
  getState() {
    return this.state
  }

  /**
   * Convert Array To Object with key
   * @param {Array.<Object>} array
   * @param {string} primaryKey
   * @return {Object}
   */
  arrayToObject = (array, primaryKey = 'id') => {
    const newData = {}
    array.forEach((item) => {
      newData[item[primaryKey]] = item
    })
    return newData
  }
}