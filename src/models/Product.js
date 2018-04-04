import { Model } from '../utils/Model'

/**
 * @class Product
 * @extends Model
 */
export class Product extends Model {
  // Table Name
  static table = 'product'

  /**
   * Set Product Model
   * @param {*} data data response from API
   */
  static set(data) {
    const { string, number, array } = this.propTypes(data)
    return {
      productId: string('product_id'),
      title: string('title'),
      description: string('description'),
      shopId: string('shop_id'),
      quantity: number('quantity'),
      pointBack: number('point_back'),
      rewardPointPercent: number('point'),
      deliveryMethod: string('delivery_method', 'meetup'),
      deliveryMethods: array('delivery_methods'),
      productImage: string('images.0.url')
    }
  }

  /**
   * Get Product Model
   * @param {*} data data from reducer
   * @return {Mock}
   */
  static get(data) {
    return data
  }
}

// Mock Response
const Mock = Product.set()