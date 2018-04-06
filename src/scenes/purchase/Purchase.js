import React from 'react'
import { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'

const Purchase = (props) => (
  <Navbar
    title='Purchase'
    leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
  >
    <Text>Purchase</Text>
  </Navbar>
)

export default Purchase
