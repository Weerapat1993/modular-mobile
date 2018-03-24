import { BaseReducer } from './BaseReducer'

/**
 * @typedef {Object} State data in initalState
 * @property {Object} [keys] data object with key
 * @property {Array.<string>} [byID] data key list 
 */

/**
 * @typedef {Object} StateWithKey data state in each key
 * @property {boolean} [isFetching] check data when loading
 * @property {boolean} [isReload] check data when reload again
 * @property {string} [error] error message response
 * @property {any} [data] data inforamtion
 */

/**
 * @typedef {Object} Fillable
 * @property {boolean} isFetching check data when loading
 * @property {boolean} isReload check data when reload again
 * @property {string} error error message response
 * @property {any} data data inforamtion
 */

/**
 * @class Reducer
 * @extends BaseReducer
 */
export class Reducer extends BaseReducer {
  /**
   * Fillable Normalize Data
   * @param {any} item data when you need normalize data
   * @return {Fillable} 
   */
  fillable = (item) => ({
    isFetching: false,
    isReload: true,
    error: '',
    data: item,
  })

  /**
   * Convert Array To Object with key
   * @param {Array.<Object>} array array data required normalize
   * @param {string} primaryKey primaray key in array
   * @return {Fillable}
   */
  normalizeData(array, primaryKey = 'id') {
    const newData = {}
    array.forEach((item) => {
      newData[item[primaryKey]] = this.fillable(item)
    })
    return newData
  }

  /**
   * setState with Key case request
   * @param {StateWithKey} [newState] craete new state
   * @return {State}
   * @example
   * class ProductReducer extends Reducer {
   *   ...
   *   getState() {
   *     const { type } = this.action
   *     switch(type) {
   *       ...
   *       case FETCH_PRODUCT.REQUEST:
   *         return this.setStateWithKeyRequest()
   *     }
   *   }
   * }
   */
  setStateWithKeyRequest(newState) {
    return this.setStateWithKey({
      isFetching: true, 
      isReload: false, 
      error: '', 
      ...newState,
    })
  }

  /**
   * setState with Key case success
   * @param {StateWithKey} [newState] craete new state
   * @return {State} new state data
   * @example
   * class ProductReducer extends Reducer {
   *   ...
   *   getState() {
   *     const { type, data } = this.action
   *     switch(type) {
   *       ...
   *       case FETCH_PRODUCT.SUCCESS:
   *         return this.setStateWithKeySuccess({ data })
   *     }
   *   }
   * }
   */
  setStateWithKeySuccess(newState) {
    return this.setStateWithKey({ 
      isFetching: false, 
      isReload: false, 
      error: '', 
      ...newState,
    })
  }

  /**
   * setState with Key case failure
   * @param {StateWithKey} [newState] craete new state
   * @return {State} new state data
   * @example
   * class ProductReducer extends Reducer {
   *   ...
   *   getState() {
   *     const { type } = this.action
   *     switch(type) {
   *       ...
   *       case FETCH_PRODUCT.FAILURE:
   *         return this.setStateWithKeyFailure()
   *     }
   *   }
   * }
   */
  setStateWithKeyFailure(newState) {
    return this.setStateWithKey({ 
      isFetching: false, 
      isReload: false, 
      error: this.errorMessage(),
      ...newState,
    })
  }
}

