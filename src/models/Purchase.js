import { Model } from '../utils/Model'
import { Product } from './Product'
import { Customer } from './Customer'
import { Shop } from './Shop';
import { Alphabet } from '../utils'

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
   * Mock Data Purchase Detail Model
   * @return {Mock}
   */
  static faker() {
    return {  
      id: `purchase:${Alphabet.random(5)}`,
      status: 'processing',
      deliveryType: 'meetup',
      userId: `user:${Alphabet.random(5)}`,
      currency: '$',
      orderNo: Alphabet.random(10),
      shop: Shop.faker(),
      customer: Customer.faker(),
      products: Product.fakerList(2),
      histories: []
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