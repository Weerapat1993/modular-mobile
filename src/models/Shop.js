import faker from 'faker/locale/en'
import { Model } from '../utils/Model'
import { Alphabet, Calculator } from '../utils'

/**
 * @class Shop
 * @extends Model
 */
export class Shop extends Model {
  // Table Name
  static table = 'shop'

  /**
   * Set Shop Model
   * @param {*} data data response from API
   */
  static set(data) {
    const { string } = this.propTypes(data)
    return { 
      shopId: string('id'),
      shopName: string('name'),
      shopDescription: string('description'),
      shopLogo: string('logo'),
    }
  }

  /**
   * Mock Data Shop Detail Model
   * @return {Mock}
   */
  static faker() {
    return {  
      shopId: `shop:${Alphabet.random(5)}`,
      shopName: faker.name.title(),
      shopDescription: faker.lorem.lines(1),
      shopLogo: Calculator.random(0, 3) ? faker.image.avatar() : '',
    }
  }

  /**
   * Get Shop Model
   * @param {Mock} data data from reducer
   * @return {Mock}
   */
  static get(data) {
    return data
  }
}

// Mock Response
const Mock = Shop.set()