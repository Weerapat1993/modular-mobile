import React from 'react'
import { func, oneOf, string, objectOf, any, number } from 'prop-types'
import { View } from 'react-native'
import { IconButton } from '../IconButton'
import styles from './styles'

const FloatingButton = ({ onPress, title, source, type, color, size, iconSize, fontColor, style }) => (
  <View style={styles.styleFloatingBtn}>
    <IconButton 
      source={source}
      onPress={onPress} 
      type={type}
      color={color}
      fontColor={fontColor}
      title={title}
      size={size} 
      iconSize={iconSize}
      style={style}
    />
  </View>
) 

FloatingButton.propTypes = {
  onPress: func.isRequired,
  type: oneOf(['primary', 'flat', 'outline']),
  color: string,
  fontColor: string,
  style: objectOf(any),
  icon: string,
  size: number,
  iconSize: number,
  title: string,
}

FloatingButton.defaultProps = {
  type: 'primary',
  color: styles.bgSecondary.backgroundColor,
  fontColor: styles.bgWhite.backgroundColor,
  style: {},
  icon: '',
  size: 60,
  iconSize: 30,
  title: ''
}

export default FloatingButton
