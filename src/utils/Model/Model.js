import { get } from 'lodash'

/**
 * @class Model
 */
export class Model {
  // Reducer name
  static table = 'table'

  /**
   * Data Model
   * @param {*} data data response from API
   * @param {string} key data key name
   * @param {*} defaultProps set defaultProps
   * @param {boolean} [isRequired] check required
   * @param {string} dataType check data type
   * @return {*}
   */
  static model(data, key, defaultProps, isRequired = true, dataType) {
    if(data !== undefined && isRequired) {
      if(get(data, key) === undefined) {
        console.warn(`Warning: Model ${this.table}.${key} is not found.`)
      } else if(typeof get(data, key) !== dataType && dataType) {
        console.warn(`Warning: Model ${this.table}.${key} is not ${dataType}.`)
      }
    }
    return get(data, key, defaultProps)
  }

  /**
   * Data Model Array
   * @param {Array.<Object>} data data response from API
   * @param {string} key data key name
   * @return {Array.<Object>}
   */
  static modelArray(data, key) {
    return get(data, key, [])
  }

  /**
   * set PropTypes in Model
   * @param {any} data 
   */
  static propTypes(data) {
    return {
      string: (key, defaultProps = '', isRequired) => this.model(data, key, defaultProps, isRequired, 'string'),
      number: (key, defaultProps = 0, isRequired) => this.model(data, key, defaultProps, isRequired, 'number'),
      bool: (key, defaultProps = false, isRequired) => this.model(data, key, defaultProps, isRequired, 'boolean'),
      array: (key) => this.model(data, key, []),
      timestamp: (key, isRequired) => this.model(data, key, 0, isRequired, 'number'),
    }
  }
}

export default Model
