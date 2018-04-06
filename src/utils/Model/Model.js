import { get } from 'lodash'
import PropTypes from 'prop-types'

/**
 * @class Model
 */
export class Model {
  // Reducer name
  static table = 'table'

  /**
   * Data Model
   * @param {any} data data response from API
   * @param {string} key data key name
   * @param {any} defaultProps set defaultProps
   * @param {boolean} [isRequired] check required
   * @param {string} [dataType] check data type
   * @return {any}
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
   * set PropTypes in Model
   * @param {any} data
   * @param {boolean} [isRequired] check required
   */
  static propTypes(data, isRequired) {
    return {
      string: (key, defaultProps = '', isRequire) => this.model(data, key, defaultProps, isRequire || isRequired, 'string'),
      number: (key, defaultProps = 0, isRequire) => this.model(data, key, defaultProps, isRequire || isRequired, 'number'),
      bool: (key, defaultProps = false, isRequire) => this.model(data, key, defaultProps, isRequire || isRequired, 'boolean'),
      array: key => this.model(data, key, []),
      object: key => this.model(data, key, {}, 'object'),
      timestamp: (key, isRequire) => this.model(data, key, 0, isRequire || isRequired, 'number'),
    }
  }

  /**
   * Set PropTypes in Model
   * @return {Function}
   */
  static setPropTypes() {
    const data = this.set()
    const propTypes = {}
    Object.keys(data).forEach(key => {
      const dataType = typeof data[key]
      let name
      switch(dataType) {
        case 'function':
          name = 'func'
          break
        case 'boolean':
          name = 'bool'
          break
        default:
          name = dataType
      }
      propTypes[key] = PropTypes[name].isRequired
    })
    return PropTypes.shape(propTypes)
  }
}

export default Model
