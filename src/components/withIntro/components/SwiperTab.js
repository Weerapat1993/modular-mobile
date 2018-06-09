import React from 'react'
import { View, Text } from 'react-native'
import { string, oneOfType, func, element, node } from 'prop-types'
import styles from './styles'

// Constant
const dimensionHeight = 320

const SwiperTab = ({ title, description, children }) => (
  <View style={styles.flexTab}>
    <View style={styles.height(dimensionHeight)} />
    <View style={styles.marginBottom(10)}>
      <Text style={[styles.textDangerBold(18), styles.textAlign('center')]}>{title}</Text>
    </View>
    <View style={styles.marginBottom(10)}>
      <Text style={[styles.textDefault(18), styles.textAlign('center')]}>{description}</Text>
    </View>
    {children}
  </View>
)

SwiperTab.propTypes = {
  title: string,
  description: string,
  children: oneOfType([
    func,
    element,
    node,
  ])
}

SwiperTab.defautlProps = {
  title: '',
  description: '',
  children: null,
}



export default SwiperTab