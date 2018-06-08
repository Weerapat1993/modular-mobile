import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './styles'

export const withIntro = (WrapperComponent) => {
  class HOC extends Component {
    render() {
      return (
        <Swiper 
          style={styles.wrapper} 
          showsButtons={false}
          loop={false}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Login</Text>
          </View>
        </Swiper>
      )
    }
  }

  return HOC
}

export default withIntro
