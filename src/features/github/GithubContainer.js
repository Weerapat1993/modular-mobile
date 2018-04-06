import React, { Component } from 'react'
import { View, FlatList, Linking, Text, RefreshControl, Dimensions } from 'react-native'
import { shape, bool, string, arrayOf, func } from 'prop-types'
import { List, Modal } from 'antd-mobile'
import { withGithub } from './redux'
import styles from './components/styles'
import { Github as Model } from '../../models/Github'

const { Item } = List;
const { Brief } = Item

class GithubContainer extends Component {
  static propTypes = {
    userID: string.isRequired,
    github: shape({
      isFetching: bool,
      isReload: bool,
      error: string,
      data: arrayOf(Model.setPropTypes()),
    }).isRequired,
    fetchGithubByID: func.isRequired
  }

  constructor() {
    super()

    this.renderItem = this.renderItem.bind(this)
    this.handleReload = this.handleReload.bind(this)
  }

  handleLinkUrl = (url) => {
    Modal.alert(
      <Text style={styles.textAlert}>Open Url</Text>,
      `Do you want to open url\n\n${url}`, [
      { text: 'Cancel', onPress: () => null },
      { text: 'Ok', onPress: () => Linking.openURL(url) },
    ]) 
  }

  handleReload() {
    const { userID } = this.props
    this.props.fetchGithubByID(userID)
  }

  renderItem({ item }) {
    const data = Model.get(item)
    return (
      <Item
        arrow="horizontal"
        thumb={data.avatar}
        multipleLine
        platform="android"
        onClick={() => this.handleLinkUrl(data.url)}
      >
        {data.name}
        <Brief>{data.description}</Brief>
      </Item>
    )
  }
   

  render() {
    const { github } = this.props
    const { height } = Dimensions.get('window')
    return (
      <View style={[styles.backgroundColor('#fff'), styles.flex(1)]}>
        <List renderHeader={() => 'Github Profile'}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={github.isFetching}
                onRefresh={this.handleReload}
              />
            }
            data={github.data}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
            style={styles.height(height - 128)}
          />
        </List>
      </View>
    )
  }
}

export default withGithub(GithubContainer)
