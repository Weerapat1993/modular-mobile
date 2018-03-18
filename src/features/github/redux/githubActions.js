import axios from 'axios'
import { FETCH_GITHUB_BY_ID } from './githubActionTypes'
import { API_ENDPOINT_GITHUB_LIST } from './githubEndpoints'

export const fetchGithubByIDRequest = (key) => ({ type: FETCH_GITHUB_BY_ID.REQUEST, key }) 
export const fetchGithubByIDSuccess = (data, key) => ({ type: FETCH_GITHUB_BY_ID.SUCCESS, data, key }) 
export const fetchGithubByIDFailure = (error, key) => ({ type: FETCH_GITHUB_BY_ID.FAILURE, error, key }) 
export const fetchGithubByID = (key) => (dispatch) => {
  dispatch(fetchGithubByIDRequest(key))
  return axios({
    method: 'GET',
    responseType: 'json',
    url: API_ENDPOINT_GITHUB_LIST(key),
  })
    .then(res => dispatch(fetchGithubByIDSuccess(res.data, key)))
    .catch(error => dispatch(fetchGithubByIDFailure(error, key)))
}
