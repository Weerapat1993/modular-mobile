import { FETCH_GITHUB_BY_ID, CREATE_GITHUB_REPOSITORY } from './githubActionTypes'
import { reducerCreator } from '../../../utils'

export const initialState = {
  keys: {},
  byID: [],
}

export const githubReducer = (state = initialState, action) => {
  const { type, data } = action
  const { fetchDataWithKey, getStateWithKey } = reducerCreator(state, action)
  switch (type) {
    case FETCH_GITHUB_BY_ID.REQUEST:
      return fetchDataWithKey.request()
    case FETCH_GITHUB_BY_ID.SUCCESS:
      return fetchDataWithKey.success({ data })
    case FETCH_GITHUB_BY_ID.FAILURE:
      return fetchDataWithKey.failure()
      case CREATE_GITHUB_REPOSITORY.REQUEST:
      return fetchDataWithKey.request()
    case CREATE_GITHUB_REPOSITORY.SUCCESS:
      return fetchDataWithKey.success({ data: [ data, ...getStateWithKey().data ] })
    case CREATE_GITHUB_REPOSITORY.FAILURE:
      return fetchDataWithKey.failure()
    default:
      return state
  }
} 
