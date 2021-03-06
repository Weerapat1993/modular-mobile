import _ from 'lodash'

// Currency
const POUND = '£'
const BAHT = '฿'

// set Default Currency
const CURRENCY = POUND


/**
 * @class Calculator
 */
class Calculator {
  /**
   * Random Number (min-max)
   * @param {number} min min Value
   * @param {number} max max Value
   * @return {number}
   * @example
   * Calculator.random(1, 10) // random value between 1 - 10
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
   * @example
   * Calculator.numberFormat(1234, 2) // '1,234.00'
   * Calculator.numberFormat(1234.567, 3, '.', '') // '1234.567'
   * Calculator.numberFormat(1234.567) // '1,234'
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

  /**
   * Convert Currency to Coin
   * @param {number} price price of currency
   * @param {string} [currency=£] currency symbol
   * @return {string}
   * @example
   * Calculator.convertToCoin(20.00, '£') // 2,000
   * Calculator.convertToCoin(880, '฿') // 2,000
   */
  static convertToCoin(price, currency) {
    switch(currency || CURRENCY) {
      case POUND:
        return this.numberFormat(price * 100)
      case BAHT:
        return this.numberFormat((price / 44) * 100)
      default:
        return this.numberFormat(price * 100)
    }
  }

  /**
   * Convert Coin to Currency
   * @param {number} price price of coin
   * @param {string} [currency=£] currency symbol
   * @return {string}
   * @example
   * Calculator.convertToCurrency(2000, '£') // 20.00
   * Calculator.convertToCurrency(2000, '฿') // 880.00
   */
  static convertToCurrency(price, currency) {
    switch(currency || CURRENCY) {
      case POUND:
        return this.numberFormat(price / 100, 2)
      case BAHT:
        return this.numberFormat((price / 100) * 44, 2)
      default:
        return this.numberFormat(price / 100, 2)
    }
  }
}

const {
  random,
  numberFormat,
  convertToCoin,
  convertToCurrency,
} = Calculator

export default {
  random,
  numberFormat,
  convertToCoin,
  convertToCurrency,
}