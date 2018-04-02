import { get } from 'lodash'

/**
 * @class Github
 */
export class Github {
  // Table Name
  static table = 'github'

  /**
   * Set Github Model
   * @param {*} data data response from API
   */
  static set(data) {
    // console.log(data)
    return {
      id: get(data, 'id', ''),
      name: get(data, 'name', ''),
      description: get(data, 'description', ''),
      avatar: get(data, 'owner.avatar_url', ''),
      url: get(data, 'html_url', ''),
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