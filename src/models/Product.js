import { Model } from '../utils/Model'

/**
 * @class Product
 */
export class Product extends Model {
  // Table Name
  static table = 'product'

  /**
   * Set Product Model
   * @param {*} data data response from API
   */
  static set(data) {
    return {
      productId: this.model(data, 'product_id', ''),
      title: this.model(data, 'title', ''),
      description: this.model(data, 'description', ''),
      shopId: this.model(data, 'shop_id', 0),
      quantity: this.model(data, 'quantity', 0),
      pointBack: this.model(data, 'point_back', 0),
      rewardPointPercent: this.model(data, 'point', 0),
      deliveryMethod: this.model(data, 'delivery_method', 'meetup'),
      deliveryMethods: this.model(data, 'delivery_methods', []),
      productImage: this.model(data, 'images.0.url', '')
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