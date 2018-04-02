import { get } from 'lodash'

export class Model {
  // Reducer name
  static table = 'table'

  /**
   * 
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
}

export default Model
