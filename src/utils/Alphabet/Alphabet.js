import _ from 'lodash'

/**
 * @class Alphabet
 * @classdesc Calculator data `string` in project
 */
class Alphabet {
  /**
   * Random string
   * @param {number} count count of string
   * @return {string}
   * @example
   * Alphabet.random(50) // zOcljsYWSd3ZyyQqlwYNMRfCQaIGYXBCFgCIhBQGXQQJZV0I7D
   */
  static random(count) {
    let text = ''
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for(let i = 0; i < count; i++) {
      text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return text
  }


  /**
   * random data in array
   * @param {Array.<any>} words array of random data
   * @return {any}
   * @example
   * Alphabet.enum(['meetup', 'delivery']) // return between 'meetup' or 'delivery'
   */
  static enum(words) {
    const num = _.random(0, words.length - 1) 
    return words[num]
  }

  /**
   * JSON comparison 
   * @param {Object} dataA 
   * @param {Object} dataB
   * @return {boolean} 
   */
  static jsonEqual(dataA, dataB) {
    const a = JSON.stringify(dataA)
    const b = JSON.stringify(dataB)
    return a === b
  }
}

export default {
  random: Alphabet.random,
  enum: Alphabet.enum,
  jsonEqual: Alphabet.jsonEqual
}