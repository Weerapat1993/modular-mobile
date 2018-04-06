import { Model } from '../utils/Model'
import { Product } from './Product'
import { Customer } from './Customer'
import { Shop } from './Shop';

/**
 * @class Github
 * @extends Model
 */
export class Purchase extends Model {
  // Table Name
  static table = 'purchase'

  /**
   * Set Purchase Model
   * @param {Object} data data response from API
   */
  static set(data) {
    const { string, array, object } = this.propTypes(data)
    // const middleName = string('customer.middle_name') ? ` ${string('customer.middle_name')}` : ''
    return { 
      id: string('id'),
      status: string('status'),
      deliveryType: string('delivery_method.delivery_type'),
      userId: string('user_id'),
      currency: string('currency.symbol'),
      orderNo: string('order_no'),
      shop: Shop.set(object('shop')),
      customer: Customer.set(object('customer')),
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