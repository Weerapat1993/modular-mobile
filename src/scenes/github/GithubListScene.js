import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'
import { GithubContainer } from '../../features'

const Github = (props) => (
  <Navbar
    title='Github'
    leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
  >
    <GithubContainer {...props} userID='Weerapat1993' />
  </Navbar>
)

export default Github

