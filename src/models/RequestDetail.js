import { get } from 'lodash'
import { Model } from '../utils/Model'
import { Product } from './Product'

/**
 * @class RequestDetail
 * @extends Model
 */
export class RequestDetail extends Model {
  // Table Name
  static table = 'request.detail'

  /**
   * Set Github Model
   * @param {*} data data response from API
   */
  static set(data) {
    const { string, number, array, timestamp } = this.propTypes(data)
    return {
      id: string('id'),
      currency: string('currency.symbol', '$'),
      status: string('status', 'Pending'),
      orderId: string('order_id'),
      orderNo: string('order_no'),
      shopId: string('shop.id'),
      shopName: string('shop.name'),
      shopLogo: string('shop.logo'),
      products: array('items').map(item => Product.set(item)),
      requestDescrtpion: string('requested_info.description'),
      requestImage: string('requested_info.images.0.url', '', false),
      rejectDescrtpion: string('rejected_info.description'),
      rejectImage: string('rejected_info.images.0.url', '', false),
      rejectCoin: number('rejected_info.returned_amount'),
      deductCoin: number('deducted_info.returned_amount'),
      userId: string('user_id', ''),
      createdAt: timestamp('created_at', false),
      updatedAt: timestamp('updated_at', false),
    }
  }

  /**
   * Get Github Model
   * @param {*} data data from reducer
   * @return {Mock}
   */
  static get(data) {
    return data
  }

  /**
   * Get State RequestDetail in Reducer
   * @param {*} state data state in reducer
   * @return {Object} 
   */
  static getState(state) {
    return get(state, this.table, {})
  }
}

// Mock Response
const Mock = RequestDetail.set()