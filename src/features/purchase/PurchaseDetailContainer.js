import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { shape, bool, string, func } from 'prop-types'
import { Purchase as Model } from '../../models/Purchase'
import { withPurchaseDetail } from './redux'
import styles from './components/styles'
import { LoadImage } from '../../components'

class PurchaseDetailContainer extends Component {
  static propTypes = {
    // Props data
    purchaseID: string,
    // Connect Store
    purchase: shape({
      isFetching: bool,
      isReload: bool,
      error: string,
      data: Model.setPropTypes(),
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
    const data = Model.get(purchase.data)
    return (
      <View style={[styles.backgroundColor('#fff'), styles.flex(1)]}>
        <ScrollView>
          <LoadImage url={data.shop.shopLogo} style={styles.size(60)} />
          <Text style={styles.textSuccessBold(16)}>{data.shop.shopName}</Text>
          <Text style={styles.textSuccess(14)}>{data.shop.shopDescription}</Text>
          <LoadImage url={data.products[0].productImage} style={styles.size(120)} />
        </ScrollView>
      </View>
    )
  }
}

export default withPurchaseDetail(PurchaseDetailContainer)
