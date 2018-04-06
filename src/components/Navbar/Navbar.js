import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { oneOfType, element, func, string } from 'prop-types'
import styles from './styles'

const Navbar = ({ children, title, leftContent, rightContent }) => (
  <View style={styles.flex(1)}>
    <View style={styles.navbarView()}>
      {leftContent}
      <View style={styles.navbarTitle()}>
        <Text style={styles.textColorBold(16, 'white')}>{title}</Text>
      </View>
      {rightContent}
    </View>
    <View style={styles.flex(1)}>
      {children}
    </View>
  </View>
  
)

Navbar.propTypes = {
  title: string,
  leftContent: oneOfType([
    element,
    func,
  ]),
  rightContent: oneOfType([
    element,
    func,
  ])
}

Navbar.defaultProps = {
  title: '',
  leftContent: null,
  rightContent: null,
}

export default Navbar
