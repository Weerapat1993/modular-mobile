import React from 'react'
import { func, oneOf, string, bool, objectOf, any } from 'prop-types'
import { TouchableOpacity, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const Button = ({ onPress, children, type, color, rounded, style }) => {
  if(type === 'flat') {
    return (
      <TouchableHighlight
        underlayColor={styles.colorOverlay('#FFFFFF', 0.3)}
        onPress={onPress} 
        style={[styles.btnView(type, color, rounded).get(), style]}
      >
        <Text style={styles.btnText(type, color).get()}>{children}</Text>
      </TouchableHighlight>
    )
  }
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.btnView(type, color, rounded).get(), style]}
    >
      <Text style={styles.btnText(type, color).get()}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: func.isRequired,
  type: oneOf(['primary', 'flat', 'outline']),
  color: oneOf(['default', 'primary', 'warning', 'success', 'danger']),
  rounded: bool,
  style: objectOf(any),
  children: string
}

Button.defaultProps = {
  type: 'primary',
  color: 'default',
  rounded: false,
  style: {},
  children: '',
}

export default Button
