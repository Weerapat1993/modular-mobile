import React from 'react'
import { Icon } from 'antd-mobile'
import { func, oneOf, string, objectOf, any, number } from 'prop-types'
import { TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import styles from './styles'

const IconButton = ({ onPress, icon, type, color, style, size, iconSize }) => {
  if(type === 'flat') {
    return (
      <TouchableHighlight
        underlayColor={styles.colorOpacity('#FFFFFF', 0.3)}
        onPress={onPress} 
        style={[styles.btnView(type, color, size), style]}
      >
        <Text>A</Text>
        {/* <Icon type={icon} size={iconSize} /> */}
      </TouchableHighlight>
    )
  }
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.btnView(type, color, size), style]}
    >
      <Text>A</Text>
      {/* <Icon type={icon} size={iconSize} /> */}
    </TouchableOpacity>
  )
}

IconButton.propTypes = {
  onPress: func.isRequired,
  type: oneOf(['primary', 'flat', 'outline']),
  color: string,
  style: objectOf(any),
  icon: string,
  size: number,
  iconSize: oneOf(['xxs', 'xs', 'sm', 'md', 'lg'])
}

IconButton.defaultProps = {
  type: 'primary',
  color: 'default',
  style: {},
  icon: '',
  size: 60,
  iconSize: 'md',
}


export default IconButton
