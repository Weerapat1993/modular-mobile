import { Model } from '../utils/Model'

/**
 * @class RequestDetail
 */
export class RequestDetail extends Model {
  // Table Name
  static table = 'requestDetail'

  /**
   * Set Github Model
   * @param {*} data data response from API
   * @example
   * const state = {
   *   image: ['images.0.url', defaultProps, isRequired],
   * }
   */
  static set(data) {
    const state = {
      id: ['id', ''],
      currency: ['currency.symbol', '$'],
      status: ['status', 'Pending'],
      orderId: ['order_id', ''],
      orderNo: ['order_no', ''],
      shopId: ['shop.id', ''],
      shopName: ['shop.name', ''],
      shopLogo: ['shop.logo', ''],
      products: ['items', []],
      requestDescrtpion: ['requested_info.description', ''],
      requestImage: ['requested_info.images.0.url', '', false],
      rejectDescrtpion: ['rejected_info.description', ''],
      rejectImage: ['rejected_info.images.0.url', '', false],
      rejectCoin: ['rejected_info.returned_amount', 0],
      deductCoin: ['deducted_info.returned_amount', 0],
      userId: ['user_id', ''],
    }
    return this.fillable(data, state)
  }

  /**
   * Get Github Model
   * @param {*} data data from reducer
   * @return {Mock}
   */
  static get(data) {
    return data
  }
}

// Mock Response
const Mock = RequestDetail.set()