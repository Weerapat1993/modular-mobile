import { Alphabet } from '../Alphabet'

/**
 * @class Optimize
 */
export class Optimize {
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

  /**
   * check data state & props in shouldComponentUpdate 
   * @param {Object} prevProps 
   * @param {Object} nextProps
   * @param {Object} prevState 
   * @param {Object} nextState
   * @param {boolean} [isWarning]
   * @return {boolean}
   */
  static isShouldRender(prevProps, nextProps, prevState, nextState, isWarning) {
    const checkProps = this.isShouldRenderProps(prevProps, nextProps)
    const checkState = this.isShouldRenderState(prevState, nextState)
    if(checkProps && checkState && isWarning) console.warn('Optimizer: shouldComponentUpdate does not render.')
    return checkProps && checkState
  }
}

export default Optimize