import { get, isEqual } from 'lodash'
import { createSelectorCreator, defaultMemoize } from 'reselect'

// Defailt State
export const defaultKeys = {
  isFetching: false,
  isReload: true,
  data: [],
  error: '',
}

// create a "selector creator" that uses lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
)

// Find State in Redux
const findGithubByID = (state, key) => get(state.github.keys, key, defaultKeys)

// Selectors
export const makeGetGithubByID = () => createDeepEqualSelector(
  findGithubByID, (github) => github
)