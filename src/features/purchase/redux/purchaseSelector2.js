import { get } from 'lodash'
import { createDeepEqualSelector } from '../../../utils/selector'
import { Purchase as Model } from '../models/Purchase'

// Defailt State
const defaultKeys = {
  isFetching: false,
  isReload: true,
  error: '',
  data: Model.set(),
}

// Find State in Redux
const findPurchase = (state) => state.purchase
const findPurchaseByID = (state, key) => get(state.purchase.keys, key, defaultKeys)

// Selectors
export const makeGetPurchaseByID = () => createDeepEqualSelector(
  findPurchaseByID, (purchase) => purchase
)

export const makeGetPurchaseList = () => createDeepEqualSelector(
  findPurchase,
  (purchase) => {
    const data = purchase.byID.map(key => purchase.keys[key].data)
    return {
      isFetching: purchase.isFetching,
      isReload: purchase.isReload,
      error: purchase.error,
      data,
    }
  }
)