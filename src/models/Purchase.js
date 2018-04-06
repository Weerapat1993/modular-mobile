import { Model } from '../utils/Model'
import { Product } from './Product'

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
   */
  static set(data) {
    const { string, array } = this.propTypes(data)
    const middleName = string('customer.middle_name') ? ` ${string('customer.middle_name')}` : ''
    return { 
      id: string('id'),
      status: string('status'),
      deliveryType: string('delivery_method.delivery_type'),
      userId: string('user_id'),
      currency: string('currency.symbol'),
      orderNo: string('order_no'),
      shopId: string('shop.id'),
      shopName: string('shop.name'),
      shopDescription: string('shop.description'),
      shopLogo: string('shop.logo'),
      customerId: string('customer.id'),
      customerEmail: string('customer.email'),
      customerName: `${string('customer.first_name')}${middleName} ${string('customer.last_name')}`,
      customerAvatar: string('customer.url_avatar'),
      customerUserId: string('customer.user_id'),
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