import { SET_LOCAL_STORAGE, GET_LOCAL_STORAGE, GET_ALL_KEY_LOCAL_STORAGE } from './storageActionTypes'
import { Reducer, classReducer } from '../../../utils'

class StorageReducer extends Reducer {
  initialState = {
    isReload: true,
    keys: {},
  }

  // convert To Json
  convertJSON = data => {
    let value = data
    if(value && (value.includes('{') || value.includes('['))) {
      value = JSON.parse(value)
    }
    return value
  }

  setItem() {
    const { keys } = this.state
    const { key, value } = this.action
    return this.setState({
      keys: {
        ...keys,
        [key]: this.convertJSON(value)
      }
    })
  }

  getAllItem() {
    const store = {}
    const { data } = this.action
    data.forEach(item => {
      store[item[0]] = this.convertJSON(item[1])
    })
    return this.setState({
      isReload: false,
      keys: store
    })
  }

  getState() {
    const { type } = this.action
    switch (type) {
      case GET_ALL_KEY_LOCAL_STORAGE:
        return this.getAllItem()
      case SET_LOCAL_STORAGE:
        return this.setItem()
      case GET_LOCAL_STORAGE:
        return this.setItem()
      default:
        return this.state
    }
  }
}

export const storageReducer = classReducer(StorageReducer)
