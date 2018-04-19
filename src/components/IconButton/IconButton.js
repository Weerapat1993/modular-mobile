import React from 'react'
import { Icon } from 'antd-mobile'
import { func, oneOf, string, objectOf, any, number } from 'prop-types'
import { TouchableOpacity, TouchableHighlight, Image, Text, View } from 'react-native'
import styles from './styles'

const IconButton = ({ onPress, source, icon, type, color, style, size, iconSize }) => {
  if(type === 'flat') {
    return (
      <TouchableHighlight
        underlayColor={styles.colorOpacity('#FFFFFF', 0.3)}
        onPress={onPress} 
        style={[styles.btnView(type, color, size), style]}
      >
        <View>
          { source && <Image source={source} style={styles.size(iconSize)} /> }
          { !source && <Text style={styles.btnTextIcon(color)}>A</Text> }
          {/* <Icon type={icon} size={iconSize} /> */}
        </View>
      </TouchableHighlight>
    )
  }
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.btnView(type, color, size), style]}
    >
      { source && <Image source={source} style={styles.size(iconSize)} /> }
      { !source && <Text style={type === 'outline' ? styles.btnTextIcon(color) : {}}>A</Text> }
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
  iconSize: number,
}

IconButton.defaultProps = {
  type: 'primary',
  color: 'default',
  style: {},
  icon: '',
  size: 60,
  iconSize: 30,
}


export default IconButton
