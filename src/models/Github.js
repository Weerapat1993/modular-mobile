import faker from 'faker'
import { random } from 'lodash'
import { Model } from '../utils/Model'

/**
 * @class Github
 * @extends Model
 */
export class Github extends Model {
  // Table Name
  static table = 'github'

  /**
   * Set Github Model
   * @param {*} data data response from API
   */
  static set(data) {
    return {
      id: this.model(data, 'id', ''),
      name: this.model(data, 'name', ''),
      description: this.model(data, 'description', ''),
      avatar: this.model(data, 'owner.avatar_url', ''),
      url: this.model(data, 'html_url', ''),
    }
  }

  /**
   * Mock Data Github Model
   */
  static faker() {
    const avatar = faker.image.avatar()
    return {
      id: random(10, 50000),
      name: faker.name.title(),
      description: faker.lorem.lines(1),
      avatar,
      url: avatar,
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