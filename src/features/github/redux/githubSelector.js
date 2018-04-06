import { get } from 'lodash'

export class Github {
  static defaultProps = {
    isFetching: false,
    isReload: true,
    data: [],
    error: '',
  }

  /**
   * Get Github by ID
   * @param {*} state
   * @param {string} key
   * @return {typeof Github.defaultProps}
   */
  static getByID(state, key) {
    return get(state.github.keys, key, Github.defaultProps)
  }
}

export default Github
