import React from 'react'
import { ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'
import { DatabaseContainer } from '../../features/database'

const DatabaseScene = props => (
  <Navbar
    title='Redux Database'
    leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
  >
    <ScrollView>
      <DatabaseContainer {...props} />
    </ScrollView>
  </Navbar>
)

export default DatabaseScene
