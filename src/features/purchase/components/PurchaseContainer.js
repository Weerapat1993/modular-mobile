import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PurchaseContainer extends Component {
  static propTypes = {
    data: PropTypes.string,
  }

  static defaultProps = {
    data: '',
  }

  render() {
    return (
      <div>PurchaseContainer</div>
    )
  }
}

export default PurchaseContainer
