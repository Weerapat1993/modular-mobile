import { FETCH_PURCHASE_LIST, FETCH_PURCHASE_DETAIL } from './purchaseActionTypes'
import { reducerCreator ,defaultState } from '../../../utils'

export const initialState = defaultState()

export const purchaseReducer = (state = initialState, action) => {
  // Action Value
  const { type, data } = action
  // Reducer Creator
  const { fetchList, fetchDataWithKey } = reducerCreator(state, action)
  // Switch case
  switch (type) {
    case FETCH_PURCHASE_LIST.REQUEST:
      return fetchList.request()
    case FETCH_PURCHASE_LIST.SUCCESS:
      return fetchList.success(data, 'id')
    case FETCH_PURCHASE_LIST.FAILURE:
      return fetchList.failure()
    case FETCH_PURCHASE_DETAIL.REQUEST:
      return fetchDataWithKey.request()
    case FETCH_PURCHASE_DETAIL.SUCCESS:
      return fetchDataWithKey.success({ data })
    case FETCH_PURCHASE_DETAIL.FAILURE:
      return fetchDataWithKey.failure()
    default:
      return state
  }
}