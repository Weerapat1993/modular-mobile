import React, { Component } from 'react'
import { View, FlatList, Linking, Text } from 'react-native'
import { shape, bool, string, arrayOf } from 'prop-types'
import { List, Modal } from 'antd-mobile'
import { withGithub } from './redux'
import styles from './components/styles'
import { Github as Model } from '../../models/Github'

const { Item } = List;
const { Brief } = Item

class GithubContainer extends Component {
  static propTypes = {
    github: shape({
      isFetching: bool,
      isReload: bool,
      error: string,
      data: arrayOf(Model.setPropTypes()),
    }).isRequired,
  }

  constructor() {
    super()

    this.renderItem = this.renderItem.bind(this)
  }

  handleLinkUrl = (url) => {
    Modal.alert(
      <Text style={styles.textAlert}>Open Url</Text>,
      `Do you want to open url\n\n${url}`, [
      { text: 'Cancel', onPress: () => null },
      { text: 'Ok', onPress: () => Linking.openURL(url) },
    ]) 
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
    return (
      <View style={styles.backgroundColor('#fff')}>
        <List renderHeader={() => 'Github Profile'}>
          <FlatList
            data={github.data}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />
        </List>
      </View>
    )
  }
}

export default withGithub(GithubContainer)
