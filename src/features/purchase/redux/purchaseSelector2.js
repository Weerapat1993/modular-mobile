import { get, isEqual } from 'lodash'
import { createSelectorCreator, defaultMemoize } from 'reselect'
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

// create a "selector creator" that uses lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

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