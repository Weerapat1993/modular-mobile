import React, { Component } from 'react'
import { View, FlatList, Text, RefreshControl, Dimensions } from 'react-native'
import { shape, bool, string, arrayOf, func } from 'prop-types'
import { List, Modal } from 'antd-mobile'
import { Actions } from 'react-native-router-flux'
import { withGithub } from './redux'
import styles from './components/styles'
import { Github as Model } from './models/Github'
import { LoadImage, FloatingButton } from '../../components'
import { t } from '../../language'

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
      `${t('github.open-url')}\n\n${url}`, [
      { text: t('cancel'), onPress: () => null },
      { text: t('ok'), onPress: () => Actions.webView({ url }) },
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
        thumb={<LoadImage url={data.avatar} style={[styles.marginRight(15), styles.size(40)]} />}
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
        <FloatingButton 
          title='+'
          type='primary'
          onPress={() => Actions.githubForm()} 
        />
      </View>
    )
  }
}

export default withGithub(GithubContainer)
