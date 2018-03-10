import { BaseReducer } from './BaseReducer'

/**
 * @class Reducer
 * @extends BaseReducer
 */
export class Reducer extends BaseReducer {

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

