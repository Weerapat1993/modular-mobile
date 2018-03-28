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
}

export default {
  random: Alphabet.random
}