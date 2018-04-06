import { Model } from '../utils/Model'
import { Product } from './Product'
import { Customer } from './Customer'
import { Shop } from './Shop'

/**
 * @class Github
 * @extends Model
 */
export class Purchase extends Model {
  // Table Name
  static table = 'purchase'

  /**
   * Set Purchase Model
   * @param {*} data data response from API
   * @param {boolean} isRequired check required
   */
  static set(data, isRequired = true) {
    const { string, array, object } = this.propTypes(data, isRequired)
    return { 
      id: string('id'),
      status: string('status'),
      deliveryType: string('delivery_method.delivery_type'),
      userId: string('user_id'),
      currency: string('currency.symbol'),
      orderNo: string('order_no'),
      ...Shop.set(object('shop'), false),
      ...Customer.set(object('customer'), false),
      products: array('items').map(item => Product.set(item)),
      histories: array('histories')
    }
  }

  /**
   * Get Github Model
   * @param {Mock} data data from reducer
   * @return {Mock}
   */
  static get(data) {
    return data
  }
}

// Mock Response
const Mock = Purchase.set()