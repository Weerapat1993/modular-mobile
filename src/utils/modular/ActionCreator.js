import axios from 'axios'

class ActionCreator {
  axios(condition, dispatch) {
    dispatch(this.actionRequest())
    return axios(condition)
      .then(res => dispatch(this.actionSuccess(res.data.data)))
      .catch(error => dispatch(this.actionFailure(error)))
  }

  actionRequest(key) {
    return {
      type: this.type.REQUEST,
      key
    }
  }

  actionSuccess(data, key) {
    return {
      type: this.type.SUCCESS,
      data,
      key,
    }
  }
  actionFailure(error, key) {
    return {
      type: this.type.FAILURE,
      error,
      key,
    }
  }
}

export default ActionCreator