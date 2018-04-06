import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { shape, arrayOf, bool, string, func } from 'prop-types'
import { Purchase as Model } from '../../models/Purchase'
import { withPurchaseDetail } from './redux'
import styles from './components/styles'
import { IMAGE_NOT_FOUND } from '../../assets/images'

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

  getImage = (uri) => !uri ? IMAGE_NOT_FOUND : { uri }

  render() {
    const { purchase } = this.props
    const data = Model.get(purchase.data)
    return (
      <View style={[styles.backgroundColor('#fff'), styles.flex(1)]}>
        <ScrollView>
          <Image source={this.getImage(data.shop.shopLogo)} style={styles.size(60)} />
          <Text style={styles.textSuccessBold(16)}>{data.shop.shopName}</Text>
          <Text style={styles.textSuccess(14)}>{data.shop.shopDescription}</Text>
          <Image source={this.getImage(data.products[0].productImage)} style={styles.size(120)} />
        </ScrollView>
      </View>
    )
  }
}

export default withPurchaseDetail(PurchaseDetailContainer)
