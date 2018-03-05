import _ from 'lodash'

const defaultState = {
  isFetching: false,
  isReload: true,
  data: {},
  error: '',
}

/**
 * Select Github With Key
 * @param {Object} state 
 * @param {string} key
 * @return {defaultState} 
 */
export const selectGithubWithKey = (state, key) => {
    const defaultStateInline = defaultState
    const article = _.get(state, key, defaultStateInline)
    return article
}
