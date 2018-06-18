import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { oneOfType, element, func, string, bool } from 'prop-types'
import styles from './styles'

const Navbar = ({ children, title, leftContent, rightContent, flat, description }) => (
  <View style={styles.flex(1)}>
    <View style={styles.navbarView(flat)}>
      {leftContent}
      <View style={styles.navbarTitle(flat)}>
        <Text numberOfLines={1} style={!flat ? styles.textWhiteBold(16) : styles.textDefaultBold(16)}>{title}</Text>
        { description ? <Text numberOfLines={1} style={!flat ? styles.textWhite(12) : styles.textMute(12)}>{description}</Text> : null }
      </View>
      {rightContent}
    </View>
    <View style={styles.flex(1)}>
      {children}
    </View>
    <StatusBar 
      backgroundColor={styles.bgPrimary.backgroundColor}
      barStyle={flat ? 'dark-content' : 'light-content'}
      showHideTransition='fade'
      animated
    />
  </View>
)

Navbar.propTypes = {
  title: string,
  flat: bool,
  leftContent: oneOfType([
    element,
    func,
  ]),
  rightContent: oneOfType([
    element,
    func,
  ]),
  description: string,
}

Navbar.defaultProps = {
  title: '',
  leftContent: null,
  rightContent: null,
  flat: false,
  description: ''
}

export default Navbar
