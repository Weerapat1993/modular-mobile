import axios from 'axios'
import { FETCH_GITHUB_LIST } from './githubActionTypes'
import { API_ENDPOINT_GITHUB_LIST } from './githubEndpoint'

export const fetchGithubListRequest = () => ({ type: FETCH_GITHUB_LIST.REQUEST }) 
export const fetchGithubListSuccess = (data) => ({ type: FETCH_GITHUB_LIST.SUCCESS, data }) 
export const fetchGithubListFailure = (error) => ({ type: FETCH_GITHUB_LIST.FAILURE, error }) 
export const fetchGithubList = () => (dispatch) => {
  dispatch(fetchGithubListRequest())
  return axios({
    method: 'GET',
    responseType: 'json',
    url: API_ENDPOINT_GITHUB_LIST(),
  })
    .then(res => dispatch(fetchGithubListSuccess(res.data.data)))
    .catch(error => dispatch(fetchGithubListFailure(error)))
}
