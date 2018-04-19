import { API_ENDPOINT } from '../../../config/endpoint'

export const API_ENDPOINT_PURCHASE_LIST = () => API_ENDPOINT('/purchase')
export const API_ENDPOINT_PURCHASE_DETAIL = id => API_ENDPOINT(`/purchase/${id}`)