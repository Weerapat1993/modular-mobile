import { get } from 'lodash'
import { createSelector } from 'reselect'

// Defailt State
export const defaultKeys = {
  isFetching: false,
  isReload: true,
  data: [],
  error: '',
}

// Find State in Redux
const findGithubByID = (state, key) => get(state.github.keys, key, defaultKeys)

// Selectors
export const makeGetGithubByID = () => createSelector(
  [findGithubByID], (github) => github
)