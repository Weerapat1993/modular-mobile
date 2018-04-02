import { get } from 'lodash'
import { Model } from './Model'

/**
 * @class RequestDetail
 */
export class RequestDetail extends Model {
  // Table Name
  static table = 'requestDetail'

  /**
   * Set Github Model
   * @param {*} data data response from API
   */
  static set(data) {
    return {
      id: this.model(data, 'id', ''),
      currency: this.model(data, 'currency.symbol', '$'),
      status: this.model(data, 'status', 'Pending'),
      orderId: this.model(data, 'order_id', ''),
      orderNo: this.model(data, 'order_no', ''),
      shopId: this.model(data, 'shop.id', ''),
      shopName: this.model(data, 'shop.name', ''),
      shopLogo: this.model(data, 'shop.logo', ''),
      products: this.model(data, 'items', []),
      requestDescrtpion: this.model(data, 'requested_info.description', ''),
      requestImage: this.model(data, 'requested_info.images.0.url', '', false),
      rejectDescrtpion: this.model(data, 'rejected_info.description', ''),
      rejectImage: this.model(data, 'rejected_info.images.0.url', '', false),
      rejectCoin: this.model(data, 'rejected_info.returned_amount', 0),
      deductCoin: this.model(data, 'deducted_info.returned_amount', 0),
      userId: this.model(data, 'user_id', '')
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
}

// Mock Response
const Mock = RequestDetail.set()