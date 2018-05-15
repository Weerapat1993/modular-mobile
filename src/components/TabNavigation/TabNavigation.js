import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TabBar } from 'antd-mobile'
import { Navbar } from '../Navbar'
import { IconButton } from '../IconButton'
import Scene from '../../scenes'
import styles from './styles'
import { BACK } from '../../assets/images'

class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
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
        <Navbar
          title='Initial'
          leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
          rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="Home"
              key="Home"
              selected={selectedTab === 'Home'}
              onPress={() => this.handleTab('Home')}
              data-seed="logId"
            >
              <Scene.Home />
            </TabBar.Item>
            <TabBar.Item
              title="Optimizer"
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
