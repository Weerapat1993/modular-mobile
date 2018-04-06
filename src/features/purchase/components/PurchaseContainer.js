import React, { Component } from 'react'
import { FlatList, View, Dimensions, RefreshControl } from 'react-native'
import { List } from 'antd-mobile'
import { shape, arrayOf, bool, string, func } from 'prop-types'
import { Purchase as Model } from '../../../models/Purchase'
import { withPurchase } from '../redux'
import styles from './styles'

const { Item } = List
const { Brief } = Item

class PurchaseContainer extends Component {
  static propTypes = {
    purchase: shape({
      isFetching: bool,
      isReload: bool,
      error: string,
      data: arrayOf(Model.setPropTypes()),
    }).isRequired,
    fetchPurchaseList: func.isRequired,
  }

  constructor() {
    super()

    this.handleReload = this.handleReload.bind(this)
  }

  handleReload() {
    this.props.fetchPurchaseList()
  }

  renderItem = ({ item }) => {
    const data = Model.get(item)
    return (
      <Item
        arrow="horizontal"
        thumb={data.customer.customerAvatar}
        multipleLine
        platform="android"
        onClick={() => alert(data.id)}
      >
        {data.shop.shopName}
        <Brief>{data.shop.shopDescription}</Brief>
      </Item>
    )
  }

  render() {
    const { purchase } = this.props
    const { height } = Dimensions.get('window')
    return (
      <View style={[styles.backgroundColor('#fff'), styles.flex(1)]}>
        <List renderHeader={() => 'Purchase List'}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={purchase.isFetching}
                onRefresh={this.handleReload}
              />
            }
            data={purchase.data}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
            style={styles.height(height - 128)}
          />
        </List>
      </View>
    )
  }
}

export default withPurchase(PurchaseContainer)
