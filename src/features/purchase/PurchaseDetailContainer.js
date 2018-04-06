import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { shape, arrayOf, bool, string, func } from 'prop-types'
import { Purchase as Model } from '../../models/Purchase'
import { withPurchaseDetail } from './redux'
import styles from './components/styles'

class PurchaseDetailContainer extends Component {
  static propTypes = {
    // Props data
    purchaseID: string,
    // Connect Store
    purchase: shape({
      isFetching: bool,
      isReload: bool,
      error: string,
      data: arrayOf(Model.setPropTypes()),
    }).isRequired,
    fetchPurchaseDetail: func.isRequired,
  }

  constructor() {
    super()

    this.handleReload = this.handleReload.bind(this)
  }

  handleReload() {
    const { purchaseID } = this.props
    this.props.fetchPurchaseDetail(purchaseID)
  }

  render() {
    const { purchase } = this.props
    return (
      <View style={[styles.backgroundColor('#fff'), styles.flex(1)]}>
        <Text>Purchase Detail Container</Text>
      </View>
    )
  }
}

export default withPurchaseDetail(PurchaseDetailContainer)
