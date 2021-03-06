import React from 'react'
// import { Icon } from 'antd-mobile'
import { func, oneOf, string, objectOf, any, number } from 'prop-types'
import { TouchableOpacity, TouchableHighlight, Image, Text, View } from 'react-native'
import styles from './styles'

const IconButton = ({ onPress, source, icon, type, color, fontColor, style, size, iconSize, title, fontWeight }) => {
  if(type === 'flat') {
    return (
      <TouchableHighlight
        underlayColor={styles.colorOpacity('#EEEEEE', 0.3)}
        onPress={onPress} 
        style={[styles.btnView(type, color, size), style]}
      >
        <View>
          { source && <Image source={source} style={styles.size(iconSize)} /> }
          { !source && <Text style={[styles.textColor(iconSize, fontColor), { fontWeight }]}>{title}</Text> }
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
      { !source && <Text style={[type === 'outline' ? styles.btnTextIcon(color) : styles.textColor(iconSize, fontColor), styles.margin(size / -2), styles.marginBottom((size / -2) + 2), { fontWeight }]}>{title}</Text> }
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
  title: string,
  fontColor: string,
  fontWeight: string,
}

IconButton.defaultProps = {
  type: 'primary',
  color: 'default',
  style: {},
  icon: '',
  size: 60,
  iconSize: 30,
  title: '',
  fontColor: '#fff',
  fontWeight: 'normal',
}


export default IconButton
