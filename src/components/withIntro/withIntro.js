import React, { Component } from 'react'
import { View, Text, Animated, Easing, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { BG_EXAMPLE } from '../../assets/images'
import styles from './styles'

export const withIntro = (WrapperComponent) => {
  class HOC extends Component {
    constructor() {
      super()

      this.state = {
        currentTab: 0
      }

      this.animated = new Animated.Value(0)

      this.handleTab = this.handleTab.bind(this)
    }

    componentDidMount() {
      this.runAnimation(0)
    }

    runAnimation(tab) {
      Animated.timing(
        this.animated,
        {
          duration: 1000,
          toValue: 4 * (tab + 1),
          easing: Easing.exp
        }
      ).start()
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { currentTab } = this.state
      return currentTab === nextState.currentTab
    }

    handleTab(tab) {
      console.log('Tab', tab)
      this.setState({ currentTab: tab })
      this.runAnimation(tab)
    }

    render() {
      const lineNum = 16
      const inputRange = []
      for(let i = 0; i < lineNum + 1; i++) {
        inputRange.push(i)
      }
      const scale = this.animated.interpolate({
        inputRange,
        outputRange: [0, 250, 215, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200]
      })
      const borderTopLeft = this.animated.interpolate({
        inputRange,
        outputRange: [0, 250, 215, 200, 200, 100, 100, 100, 100, 5, 5, 5, 5, 100, 75, 50, 50]
      })
      const borderTopRight = this.animated.interpolate({
        inputRange,
        outputRange: [0, 250, 215, 200, 200, 5, 5, 5, 5, 100, 100, 100, 100, 100, 75, 50, 50]
      })
      const borderBottomLeft = this.animated.interpolate({
        inputRange,
        outputRange: [0, 250, 215, 200, 200, 5, 5, 5, 5, 100, 100, 100, 100, 100, 75, 50, 50]
      })
      const borderBottomRight = this.animated.interpolate({
        inputRange,
        outputRange: [0, 250, 215, 200, 200, 100, 100, 100, 100, 5, 5, 5, 5, 100, 75, 50, 50]
      })
      const opacity = this.animated.interpolate({
        inputRange: [1, 4],
        outputRange: [0, 1],
      })
      return (
        <View style={styles.bgContainer}>
          <View style={styles.flexCenter}>
            <Animated.View style={styles.animationImg1(scale, opacity, borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight)} >
              <Animated.Image source={BG_EXAMPLE} style={styles.size(scale)} />
            </Animated.View>
          </View>
          <Swiper 
            showsButtons={false}
            loop={false}
            onIndexChanged={this.handleTab}
          >
            <View style={styles.flexCenter}>
              <Text style={styles.textDefaultBold(24)}>Hello Swiper</Text>
            </View>
            <View style={styles.flexCenter}>
              <Text style={styles.textDefaultBold(24)}>Beautiful</Text>
            </View>
            <View style={styles.flexCenter}>
              <Text style={styles.textDefaultBold(24)}>And simple</Text>
            </View>
            <View style={styles.flexCenter}>
              <Text style={styles.textDefaultBold(24)}>Login</Text>
            </View>
          </Swiper>
        </View>
        
      )
    }
  }

  return HOC
}

export default withIntro
