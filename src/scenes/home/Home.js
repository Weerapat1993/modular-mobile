import React from 'react';
import { View } from 'react-native';
import { List } from 'antd-mobile';
import { Actions } from 'react-native-router-flux'
import styles from './styles'

const { Item } = List;
const { Brief } = Item;

const Home = () => (
  <View style={styles.container}>
    <List renderHeader={() => 'All Scenes'}>
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        platform="android"
      >
        Home 
        <Brief>Go to Home</Brief>
      </Item>
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => Actions.about()}
        platform="android"
      >
        About 
        <Brief>Go to About</Brief>
      </Item>
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
    </List>
  </View>
)

export default Home

