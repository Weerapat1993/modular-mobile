import React, { Component } from 'react'
import { View } from 'react-native'
import { TabBar } from 'antd-mobile'
import Scene from '../../scenes'
import styles from './styles'

class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    }

    this.handleTab = this.handleTab.bind(this)
  }

  handleTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state
    return (
      <View style={styles.flex(1)}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Home"
            key="Home"
            selected={selectedTab === 'blueTab'}
            onPress={() => this.handleTab('blueTab')}
            data-seed="logId"
          >
            <Scene.Home />
          </TabBar.Item>
          <TabBar.Item
            title="Shop"
            key="Shop"
            selected={selectedTab === 'redTab'}
            onPress={() => this.handleTab('redTab')}
            data-seed="logId1"
          >
            <Scene.About />
          </TabBar.Item>
        </TabBar>
      </View>
    )
  }
}

export default TabNavigation
