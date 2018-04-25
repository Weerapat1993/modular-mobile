import React from 'react'
import { ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'
import { DatabaseDetailContainer } from '../../features/database'

const DatabaseDetailScene = props => (
  <Navbar
    title='Redux Database'
    leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
  >
    <ScrollView>
      <DatabaseDetailContainer {...props} /> 
    </ScrollView>
  </Navbar>
)

export default DatabaseDetailScene
