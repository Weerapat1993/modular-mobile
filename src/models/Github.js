import { get } from 'lodash'
import { Model } from '../utils/Model'

/**
 * @class Github
 */
export class Github extends Model {
  // Table Name
  static table = 'github'

  /**
   * Set Github Model
   * @param {*} data data response from API
   */
  static set(data) {
    // console.log(data)
    return {
      id: this.model(data, 'id', ''),
      name: this.model(data, 'name', ''),
      description: this.model(data, 'description', ''),
      avatar: this.model(data, 'owner.avatar_url', ''),
      url: this.model(data, 'html_url', ''),
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
const Mock = Github.set()