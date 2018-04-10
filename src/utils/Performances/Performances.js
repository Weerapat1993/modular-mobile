import { Alphabet } from '../Alphabet'

/**
 * @class Performance
 */
export class Performances {
  /**
   * check data props in shouldComponentUpdate 
   * @param {Object} prevProps 
   * @param {Object} nextProps
   * @return {boolean}
   */
  static isShouldRenderProps(prevProps, nextProps) {
    const prev = this._removeFunction(prevProps)
    const next = this._removeFunction(nextProps)
    return Alphabet.jsonEqual(prev, next)
  }

  /**
   * check data state in shouldComponentUpdate 
   * @param {Object} prevState 
   * @param {Object} nextState
   * @return {boolean}
   */
  static isShouldRenderState(prevState, nextState) {
    const prev = this._removeFunction(prevState)
    const next = this._removeFunction(nextState)
    return Alphabet.jsonEqual(prev, next)
  }

  static _removeFunction(obj) {
    const newObj = {}
    Object.keys(obj).forEach((key => {
      if(typeof obj[key] !== 'function') {
        if(Array.isArray(obj[key])) {
          newObj[key] = obj[key]
        } else if (typeof obj[key] === 'object') {
          newObj[key] = this._removeFunction(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }))
    return newObj
  }
}

export default Performances