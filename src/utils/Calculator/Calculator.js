import { random } from 'lodash'

/**
 * @class Calculator
 */
export class Calculator {
  /**
   * Randon Number (min-max)
   * @param {number} min 
   * @param {number} max
   * @return {number}
   * @static
   */
  static random(min, max) {
    return random(min, max)
  }

  /**
   * PHP `number_format` in JavaScript
   * [Link]{@link http://locutus.io/php/strings/number_format }
   * 
   * @param {number} number
   * @param {number} decimals 
   * @param {string} decPoint 
   * @param {string} thousandsSep 
   * @return {string}
   * @static
   */
  static numberFormat(number, decimals, decPoint, thousandsSep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
    const n = !isFinite(+number) ? 0 : +number
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
    const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
    let s = ''
  
    const toFixedFix = (n, prec) => {
      const k = Math.pow(10, prec)
      return '' + (Math.round(n * k) / k)
        .toFixed(prec)
    }
  
    // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || ''
      s[1] += new Array(prec - s[1].length + 1).join('0')
    }
  
    return s.join(dec)
  }
}