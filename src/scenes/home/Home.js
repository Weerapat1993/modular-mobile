import React from 'react';
import { View } from 'react-native';
import { List } from 'antd-mobile';
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import { withFetchStorage } from '../../features/storage'

const { Item } = List;
const { Brief } = Item;

const Home = () => (
  <View style={styles.container}>
    <List renderHeader={() => 'All Scenes'}>
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => Actions.github()}
        platform="android"
      >
        Github 
        <Brief>Go to Github</Brief>
      </Item>
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => Actions.storage()}
        platform="android"
      >
        Storage 
        <Brief>Go to Local Storage</Brief>
      </Item>
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => Actions.purchase()}
        platform="android"
      >
        Purchase 
        <Brief>Go to Purchase</Brief>
      </Item>
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => Actions.database()}
        platform="android"
      >
        Database 
        <Brief>Go to Database</Brief>
      </Item>
    </List>
  </View>
)

export default withFetchStorage(Home)

