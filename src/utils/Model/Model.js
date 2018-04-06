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
   * @param {Object} data data response from API
   * @param {string} key data key name
   * @param {any} defaultProps set defaultProps
   * @param {boolean} [isRequired] check required
   * @param {string} [dataType] check data type
   * @return {any}
   */
  static model(data, key, defaultProps, isRequired = true, dataType) {
    if(data !== undefined && isRequired) {
      if(Object.keys(data).length) {
        if(get(data, key) === undefined) {
          console.warn(`Warning: Model ${this.table}.${key} is not found.`)
        } else if(typeof get(data, key) !== dataType && dataType) {
          console.warn(`Warning: Model ${this.table}.${key} is not ${dataType}.`)
        }
      }
    }
    return get(data, key, defaultProps)
  }

  /**
   * set PropTypes in Model
   * @param {Object} data
   */
  static propTypes(data) {
    return {
      string: (key, defaultProps = '', isRequired) => this.model(data, key, defaultProps, isRequired, 'string'),
      number: (key, defaultProps = 0, isRequired) => this.model(data, key, defaultProps, isRequired, 'number'),
      bool: (key, defaultProps = false, isRequired) => this.model(data, key, defaultProps, isRequired, 'boolean'),
      array: key => this.model(data, key, []),
      object: key => this.model(data, key, {}, 'object'),
      timestamp: (key, isRequired) => this.model(data, key, 0, isRequired, 'number'),
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
      if(Array.isArray(data[key])) {
        name = 'array'
      } else {
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
      }
      propTypes[key] = PropTypes[name]
    })
    return PropTypes.shape(propTypes)
  }

  /**
   * Mock Data List Model
   * @param {number} count count of Array Data
   * @return {Array.<Object>}
   */
  static fakerList(count) {
    const arr = []
    for(let i = 0; i < count; i++) {
      arr.push(i + 1)
    }
    return arr.map(() => this.faker())
  }
}

export default Model
