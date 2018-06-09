import { FETCH_GITHUB_BY_ID, CREATE_GITHUB_REPOSITORY } from './githubActionTypes'
import { Reducer, classReducer } from '../../../utils'

export class GithubReducer extends Reducer {
  initialState = {
    keys: {},
    byID: [],
  }

  getState() {
    const { type, data } = this.action 
    switch (type) {
      case FETCH_GITHUB_BY_ID.REQUEST:
        return this.setStateWithKeyRequest()
      case FETCH_GITHUB_BY_ID.SUCCESS:
        return this.setStateWithKeySuccess({ data })
      case FETCH_GITHUB_BY_ID.FAILURE:
        return this.setStateWithKeyFailure()
        case CREATE_GITHUB_REPOSITORY.REQUEST:
        return this.setStateWithKeyRequest()
      case CREATE_GITHUB_REPOSITORY.SUCCESS:
        return this.setStateWithKeySuccess({ data: [ data, ...this.getStateWithKey().data ] })
      case CREATE_GITHUB_REPOSITORY.FAILURE:
        return this.setStateWithKeyFailure()
      default:
        return this.state
    }
  }
}

export const githubReducer = classReducer(GithubReducer)