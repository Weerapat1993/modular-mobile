import React, { Component } from 'react'
import { View, FlatList, Linking, Text } from 'react-native'
import { shape, bool, string, arrayOf, object } from 'prop-types'
import { List, Modal } from 'antd-mobile';
import { withGithub } from './redux'
import styles from './components/styles'

const { Item } = List;
const { Brief } = Item

class GithubContainer extends Component {
  static propTypes = {
    github: shape({
      isFetching: bool,
      isReload: bool,
      error: string,
      data: arrayOf(object),
    }).isRequired,
  }

  handleLinkUrl = (url) => {
    Modal.alert(
      <Text style={styles.textAlert}>Open Url</Text>,
      `Do you want to open url\n\n${url}`, [
      { text: 'Cancel', onPress: () => null },
      { text: 'Ok', onPress: () => Linking.openURL(url) },
    ]) 
  }

  renderItem = ({ item }) => (
    <Item
      arrow="horizontal"
      thumb={item.owner.avatar_url}
      multipleLine
      platform="android"
      onClick={() => this.handleLinkUrl(item.html_url)}
    >
      {item.name}
      <Brief>{item.description}</Brief>
    </Item>
  )

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
