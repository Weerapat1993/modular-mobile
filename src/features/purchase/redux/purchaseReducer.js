import { FETCH_PURCHASE_LIST } from './purchaseActionTypes'

// InititalState
export const initialState = {
  isFetching: false,
  isReload: true,
  data: [],
  error: '',
}

/**
 * Purchase Reducer
 * @param {initialState} state
 * @param {Object} action
 * @return {initialState}
 */
export const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PURCHASE_LIST.REQUEST:
      return state
    case FETCH_PURCHASE_LIST.SUCCESS:
      return state
    case FETCH_PURCHASE_LIST.FAILURE:
      return state
    default:
      return state
  }
}
