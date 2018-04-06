import { Model } from '../utils/Model'

/**
 * @class Customer
 * @extends Model
 */
export class Customer extends Model {
  // Table Name
  static table = 'customer'

  /**
   * Set Customer Model
   * @param {*} data data response from API
   */
  static set(data) {
    const { string } = this.propTypes(data)
    const middleName = string('middle_name') ? ` ${string('middle_name')}` : ''
    return { 
      customerId: string('id'),
      customerEmail: string('email'),
      customerName: `${string('first_name')}${middleName} ${string('last_name')}`,
      customerAvatar: string('url_avatar'),
      customerUserId: string('user_id'),
    }
  }

  /**
   * Get Customer Model
   * @param {Mock} data data from reducer
   * @return {Mock}
   */
  static get(data) {
    return data
  }
}

// Mock Response
const Mock = Customer.set()