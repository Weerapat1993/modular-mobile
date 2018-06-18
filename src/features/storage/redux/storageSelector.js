/**
 * @class Storage
 */
export class Storage {
  /**
   * Get Item in storage
   * @param {Object} state
   * @param {string} key
   * @return {Object}
   */
  static getItem(state, key) {
    return key ? state.storage.keys[key] : state.storage.keys
  }

  /**
   * get Data in storage Reducer
   * @static
   * @param {Object} state
   * @return {{ isReload: boolean }}
   */
  static data(state) {
    return state.storage
  }
}

