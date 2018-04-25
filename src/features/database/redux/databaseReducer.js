import { Reducer, classReducer } from '../../../utils'
import { FETCH_PURCHASE_LIST } from '../../purchase/redux/purchaseActionTypes'
import { FETCH_GITHUB_BY_ID } from '../../github/redux/githubActionTypes'

class DatabaseReducer extends Reducer {
  initialState = {
    github: {},
    purchase: {},
    storage: {},
  }

  arrayToObject = (data, primaryKey = 'id') => {
    const keys = {}
    data.forEach(item => {
      keys[item[primaryKey]] = item
    })
    return keys
  }

  getState() {
    const { type, data } = this.action
    switch (type) {
      case FETCH_GITHUB_BY_ID.SUCCESS:
        return this.setState({
          github: {
            ...this.state.github,
            ...this.arrayToObject(data, 'id')
          }
        })
      case FETCH_PURCHASE_LIST.SUCCESS:
        return this.setState({
          purchase: {
            ...this.state.purchase,
            ...this.arrayToObject(data, 'id')
          }
        })
      default:
        return this.state
    }
  }
}

export const databaseReducer = classReducer(DatabaseReducer)
