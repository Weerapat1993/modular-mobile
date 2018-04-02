import { get } from 'lodash'

export class Model {
  // Reducer name
  static table = 'table'

  /**
   * Data Model
   * @param {*} data data response from API
   * @param {string} key data key name
   * @param {*} defaultProps set defaultProps
   * @param {boolean} [isRequired] check required
   * @return {*}
   */
  static model(data, key, defaultProps, isRequired = true) {
    if (get(data, key) === undefined && data !== undefined && isRequired) {
      console.warn(`Warning: Model ${this.table}.${key} is not found.`)
    }
    return get(data, key, defaultProps)
  }

  /**
   * Data Model Array
   * @param {*} data data response from API
   * @param {string} key data key name
   * @return {Array.<Object>}
   */
  static modelArray(data, key) {
    return get(data, key, [])
  }

  /**
   * Data Model Fillable
   * @param {*} data data response from API
   * @param {Array.<String>} state array of key
   */
  static fillable(data, state) {
    const newState = {}
    Object.keys(state).forEach(key => {
      if (get(data, state[key][0]) === undefined && data !== undefined && state[key].length === 3 && state[key][2]) {
        console.warn(`Warning: Model ${this.table}.${state[key][0]} is not found.`)
      }
      newState[key] = get(data, state[key][0], state[key][1])
    })
    return newState
  }
}

export default Model
