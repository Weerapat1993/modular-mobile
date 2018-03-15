import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Button } from '../../../src/components'

const ButtonScene = ({ type, rounded }) => (
  <View>
    <Button type={type} color='default' rounded={rounded} onPress={action('clicked-text')}>DEFAULT</Button>
    <Button type={type} color='primary' rounded={rounded} onPress={action('clicked-text')}>PRIMARY</Button>
    <Button type={type} color='warning' rounded={rounded} onPress={action('clicked-text')}>WARNING</Button>
    <Button type={type} color='success' rounded={rounded} onPress={action('clicked-text')}>SUCCESS</Button>
    <Button type={type} color='danger' rounded={rounded} onPress={action('clicked-text')}>DANGER</Button> 
    <Button type={type} color='#C6C' rounded={rounded} onPress={action('clicked-text')}>COLOR</Button>    
  </View>
)

ButtonScene.propTypes = {
  type: PropTypes.string,
  rounded: PropTypes.bool,
}

ButtonScene.defaultProps = {
  type: 'default',
  rounded: false,
}

export default ButtonScene
