import React from 'react'
import { string } from 'prop-types'
import { WebView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'

const WebScene = ({ title, url }) => (
  <Navbar
    title={title}
    description={url}
    flat
    leftContent={<IconButton type='flat' title='x' fontColor={'#333'} size={40} iconSize={20} fontWeight='100' onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={20} onPress={Actions.pop} />}
  >
    <WebView source={{uri: url}} />
  </Navbar>
)

WebScene.propTypes = {
  title: string,
  url: string.isRequired,
}

WebScene.defaultProps = {
  title: 'Web View',
}

export default WebScene
