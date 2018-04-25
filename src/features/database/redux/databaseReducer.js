import { Reducer, classReducer } from '../../../utils'
import { FETCH_PURCHASE_LIST } from '../../purchase/redux/purchaseActionTypes'

class DatabaseReducer extends Reducer {
  initialState = {
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
      case FETCH_PURCHASE_LIST.SUCCESS:
        return this.setState({
          purchase: this.arrayToObject(data, 'id')
        })
      default:
        return this.state
    }
  }
}

export const databaseReducer = classReducer(DatabaseReducer)
