import { Model } from '../utils/Model'

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
   * @param {boolean} isRequired check required
   */
  static set(data, isRequired = true) {
    const { string } = this.propTypes(data, isRequired)
    return { 
      shopId: string('id'),
      shopName: string('name'),
      shopDescription: string('description'),
      shopLogo: string('logo'),
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