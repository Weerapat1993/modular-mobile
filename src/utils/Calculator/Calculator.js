import _ from 'lodash'

/**
 * @class Calculator
 */
export class Calculator {
  /**
   * Random Number (min-max)
   * @param {number} min min Value
   * @param {number} max max Value
   * @return {number}
   */
  static random(min, max) {
    return _.random(min, max)
  }

  /**
   * PHP `number_format` in JavaScript
   * [Link Description]{@link http://locutus.io/php/strings/number_format }
   * 
   * @param {number|string} number value of number 
   * @param {number} decimals Count of decimal number
   * @param {string} decPoint symbol of decimal number
   * @param {string} thousandsSep symbol of thousands separator
   * @return {string}
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

const {
  random,
  numberFormat,
} = Calculator

export default {
  random,
  numberFormat,
}