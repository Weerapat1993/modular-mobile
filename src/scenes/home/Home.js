import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text, Body, Right, Icon, Left } from 'native-base';
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import { t } from '../../language'

const data = [
  {
    id: 1,
    icon: 'logo-github',
    title: 'Github',
    onPress: () => Actions.githubList()
  },
  {
    id: 2,
    icon: 'archive',
    title: 'Storage',
    onPress: () => Actions.storage()
  },
  {
    id: 3,
    icon: 'cart',
    title: t('purchase'),
    onPress: () => Actions.purchaseList()
  },
]

const Home = () => (
  <View style={styles.container}>
    <List>
      {
        data.map((item) => (
          <ListItem onPress={item.onPress} icon key={item.id} >
            <Left>
              <Icon name={item.icon} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
            </Body>
            <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
          </ListItem>
        ))
      }
    </List>
  </View>
)

export default Home

