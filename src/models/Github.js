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
    const state = {
      id: ['id', ''],
      name: ['name', ''],
      description: ['description', ''],
      avatar: ['owner.avatar_url', ''],
      url: ['html_url', ''],
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
const Mock = Github.set()