import axios from 'axios'
import { FETCH_GITHUB_BY_ID, CREATE_GITHUB_REPOSITORY } from './githubActionTypes'
import { API_ENDPOINT_GITHUB_LIST } from './githubEndpoints'
import { Github as Model } from '../models/Github'

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
    .then(res => dispatch(fetchGithubByIDSuccess(res.data.map(item => Model.set(item)), key)))
    .catch(error => dispatch(fetchGithubByIDFailure(error, key)))
}

export const createGithubRepositoryRequest = (key) => ({ type: CREATE_GITHUB_REPOSITORY.REQUEST, key })
export const createGithubRepositorySuccess = (data, key) => ({ type: CREATE_GITHUB_REPOSITORY.SUCCESS, data, key })
export const createGithubRepositoryFailure = (error, key) => ({ type: CREATE_GITHUB_REPOSITORY.FAILURE, error, key })
export const createGithubRepository = (dataUpdate, key) => (dispatch, getState) => {
  dispatch(createGithubRepositoryRequest(key))
  setTimeout(() => {
    dispatch(createGithubRepositorySuccess(dataUpdate, key))
  }, 2000)
} 