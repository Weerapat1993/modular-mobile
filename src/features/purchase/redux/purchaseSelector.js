import { get } from 'lodash'

export class PurchaseSelector {
  static defaultProps = {
    isFetching: false,
    isReload: true,
    error: '',
  }

  /**
   * Get Purchase Lists
   * @param {Object} state state
   * @return {Array.<typeof PurchaseSelector.defaultProps>}
   */
  static getList(state) {
    const { purchase } = state
    const data = purchase.byID.map(key => purchase.keys[key].data)
    return {
      ...this.defaultProps,
      data,
    }
  }

  /**
   * Get Purchase by ID
   * @param {*} state
   * @param {string} key
   * @return {typeof PurchaseSelector.defaultProps}
   */
  static getByID(state, key) {
    return get(state.purchase.keys, key, this.defaultProps)
  }
}

export default PurchaseSelector
