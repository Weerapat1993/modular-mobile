

/**
 * @class Selector
 */
export class Selector {
  // Default State
  static defaultState = {}

  /**
   * set new state in selector
   * @param {Object} newState create new state in selector
   * @return {Object}
   */
  static setState(newState) {
    return {
      ...this.defaultState,
      ...newState,
    }
  }
}