import { BaseReducer } from './BaseReducer'

/**
 * @class Reducer
 * @extends BaseReducer
 */
export class Reducer extends BaseReducer {
  /**
   * Fillable Normalize Data
   * @param {*} item
   */
  fillable = (item) => ({
    isFetching: false,
    isReload: true,
    error: '',
    data: item,
  })

  /**
   * Convert Array To Object with key
   * @param {Array.<Object>} array
   * @param {string} primaryKey
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
   * @param {StateWithKey} newState 
   * @return {State}
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
   * @param {StateWithKey} newState 
   * @return {State}
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
   * @param {StateWithKey} newState 
   * @return {State}
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

