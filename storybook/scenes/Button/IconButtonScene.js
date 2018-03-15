import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { IconButton } from '../../../src/components'

const IconButtonScene = ({ type }) => (
  <View>
    <IconButton icon='search' type={type} color='default' onPress={action('clicked-text')} />
    <IconButton icon='search' type={type} color='primary' onPress={action('clicked-text')} />
    <IconButton icon='search' type={type} color='warning' onPress={action('clicked-text')} />
    <IconButton icon='search' type={type} color='success' onPress={action('clicked-text')} />
    <IconButton icon='search' type={type} color='danger' onPress={action('clicked-text')} />
    <IconButton icon='search' type={type} color='#C6C' onPress={action('clicked-text')} />
    <IconButton icon='search' type={type} color='#FCC' textColor='#333' onPress={action('clicked-text')} />
  </View>
)

IconButtonScene.propTypes = {
  type: PropTypes.string,
}

IconButtonScene.defaultProps = {
  type: 'default',
}

export default IconButtonScene
