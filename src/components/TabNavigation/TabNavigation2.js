import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { View } from 'react-native'
import { Icon } from 'native-base'
import { Navbar } from '../../components'
import Scene from '../../scenes'
import styles from './styles'
import { t } from '../../language'

class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home'
    }

    this.handleTab = this.handleTab.bind(this)
  }

  handleTab(tab) {
    this.setState({ selectedTab: tab })
  }

  


  render() {
    const { selectedTab } = this.state
    return (

      <View style={styles.flex(1)}>
        <Navbar
          title={t('initial')}
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
            style={styles.lineTop(1)}
          >
            <TabBar.Item
              title={t('home')}
              key="Home"
              selected={selectedTab === 'Home'}
              onPress={() => this.handleTab('Home')}
              data-seed="logId"
            >
              <Scene.Home />
            </TabBar.Item>
            <TabBar.Item
              title={t('optimizer')}
              key="Optimizer"
              selected={selectedTab === 'Optimizer'}
              onPress={() => this.handleTab('Optimizer')}
              data-seed="logId1"
            >
              <Scene.About />
            </TabBar.Item>
          </TabBar>
        </Navbar>
      </View>
    )
  }
}

export default TabNavigation
