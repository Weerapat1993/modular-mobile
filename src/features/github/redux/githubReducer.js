import { FETCH_GITHUB_LIST } from './githubActionTypes'

// InititalState
const initialState = {
  isFetching: false,
  isReload: true,
  data: [],
  error: '',
}

/**
 * Github Reducer
 * @param {initialState} state
 * @param {Object} action
 * @return {initialState}
 */
export const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_LIST.REQUEST:
      return state
    case FETCH_GITHUB_LIST.SUCCESS:
      return state
    case FETCH_GITHUB_LIST.FAILURE:
      return state
    default:
      return state
  }
}

/**
 * Github Model
 * @param {Object} state
 * @return {initialState}
 */
export const Github = (state) => state.github
