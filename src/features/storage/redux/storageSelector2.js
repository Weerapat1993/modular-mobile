import { createDeepEqualSelector } from '../../../utils/selector'

// Defailt State
export const defaultKeys = {
  isFetching: false,
  isReload: true,
  data: [],
  error: '',
}

// Find State in Redux
const findStorage = (state) => state.storage
const findStorageKeyItem = (state, key) => key ? state.storage.keys[key] : state.storage.keys

// Selectors
export const makeGetStorage = () => createDeepEqualSelector(
  findStorage, (storage) => storage
)

export const makeGetItem = () => createDeepEqualSelector(
  findStorageKeyItem, (storage) => storage
)