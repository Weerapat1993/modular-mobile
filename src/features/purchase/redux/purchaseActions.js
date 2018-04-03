import axios from 'axios'
import { FETCH_PURCHASE_LIST } from './purchaseActionTypes'
import { API_ENDPOINT_PURCHASE_LIST } from './purchaseEndpoints'

export const fetchPurchaseListRequest = () => ({ type: FETCH_PURCHASE_LIST.REQUEST }) 
export const fetchPurchaseListSuccess = (data) => ({ type: FETCH_PURCHASE_LIST.SUCCESS, data }) 
export const fetchPurchaseListFailure = (error) => ({ type: FETCH_PURCHASE_LIST.FAILURE, error }) 
export const fetchPurchaseList = () => (dispatch) => {
  dispatch(fetchPurchaseListRequest())
  dispatch(fetchPurchaseListSuccess())
  // dispatch(fetchPurchaseListRequest())
  // return axios({
  //   method: 'GET',
  //   responseType: 'json',
  //   url: API_ENDPOINT_PURCHASE_LIST(),
  // })
  //   .then(res => dispatch(fetchPurchaseListSuccess(res.data.data)))
  //   .catch(error => dispatch(fetchPurchaseListFailure(error)))
}
