import { get } from 'lodash'

export class PurchaseSelector {
  static defaultKeys = {
    isFetching: false,
    isReload: true,
    error: '',
    data: {}
  }

  /**
   * select old state in purchaseReducer
   * @param {Object} state state in purchaseReducer
   * @param {Object} newState create new state
   * @return {Object}
   */
  static setState = (state, newState) => ({
    isFetching: state.isFetching,
    isReload: state.isReload,
    error: state.error,
    ...newState,
  })

  /**
   * Get Purchase Lists
   * @param {Object} state state in store
   * @return {typeof PurchaseSelector.defaultProps}
   */
  static getList(state) {
    const { purchase } = state
    const data = purchase.byID.map(key => purchase.keys[key].data)
    return this.setState(purchase, {
      data,
    })
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