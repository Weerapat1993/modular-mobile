import R from 'ramda'
import { FETCH_PURCHASE_LIST, FETCH_PURCHASE_DETAIL } from './purchaseActionTypes'
import { Reducer, classReducer } from '../../../utils'

export class PurchaseReducer extends Reducer {
  initialState = {
    keys: {},
    byID: [],
    isFetching: false,
    isReload: true,
    error: '',
  }

  getState() {
    const { type, data } = this.action 
    switch (type) {
      case FETCH_PURCHASE_LIST.REQUEST:
        return this.setStateRequest()
      case FETCH_PURCHASE_LIST.SUCCESS:
        return this.normalizerList(data, 'id')
      case FETCH_PURCHASE_LIST.FAILURE:
        return this.setStateFailure()
      case FETCH_PURCHASE_DETAIL.REQUEST:
        return this.setStateWithKeyRequest()
      case FETCH_PURCHASE_DETAIL.SUCCESS:
        return this.setStateWithKeySuccess({ data })
      case FETCH_PURCHASE_DETAIL.FAILURE:
        return this.setStateWithKeyFailure()
      default:
        return this.state
    }
  }
}

export const purchaseReducer = classReducer(PurchaseReducer)