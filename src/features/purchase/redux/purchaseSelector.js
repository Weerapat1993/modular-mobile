import { get } from 'lodash'
import { Purchase as Model } from '../models/Purchase'

export class PurchaseSelector {
  // Default data in Key value
  static defaultKeys = {
    isFetching: false,
    isReload: true,
    error: '',
    data: Model.set(),
  }

  /**
   * Get Purchase Lists
   * @param {Object} state state in store
   * @return {Object}
   */
  static getList(state) {
    const { purchase } = state
    const data = purchase.byID.map(key => purchase.keys[key].data)
    return {
      isFetching: purchase.isFetching,
      isReload: purchase.isReload,
      error: purchase.error,
      data,
    }
  }

  /**
   * Get Purchase by ID
   * @param {*} state
   * @param {string} key
   * @return {typeof PurchaseSelector.defaultKeys}
   */
  static getByID(state, key) {
    return get(state.purchase.keys, key, this.defaultKeys)
  }
}

export default PurchaseSelector