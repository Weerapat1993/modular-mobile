import React, { Component } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import { object } from 'prop-types'
import Swiper from 'react-native-swiper'
import { Button } from '../../components'
import { BG_EXAMPLE, IMAGE_NOT_FOUND, LOADING_SCREEN, TEST_BG } from '../../assets/images'
import styles from './styles'

export const withIntro = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      storage: object,
      localStorage: object.isRequired,
    }

    static defaultProps = {
      storage: null,
    }

    constructor() {
      super()

      this.state = {
        currentTab: 0,
        isSkip: false
      }

      this.animated = new Animated.Value(0)
      this.handleTab = this.handleTab.bind(this)
    }

    componentDidMount() {
      this.runAnimation(0, true)
    }

    runAnimation(tab, isFirst) {
      Animated.timing(
        this.animated,
        {
          duration: isFirst ? 2000 : 1000,
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

    handleSkip() {
      this.setState({ isSkip: true })
    }

    render() {
      const { storage } = this.props
      const { isSkip } = this.state
      const dimensionHeight = 300
      const imgSize = 200
      const lineNum = 16
      const inputRange = []
      const outputScale = [0, 250, 215]
      for(let i = 0; i < lineNum + 1; i++) {
        inputRange.push(i)
      }
      for(let o = 2; o < lineNum; o++) {
        outputScale.push(imgSize)
      }
      const scale = this.animated.interpolate({
        inputRange,
        outputRange: outputScale,
      })
      const borderTopLeft = this.animated.interpolate({
        inputRange,
        outputRange: [0, 5, 5, 5, 5, 100, 100, 100, 100, 5, 5, 5, 5, 100, 75, 50, 50]
      })
      const borderTopRight = this.animated.interpolate({
        inputRange,
        outputRange: [0, 5, 5, 5, 5, 5, 5, 5, 5, 100, 100, 100, 100, 100, 75, 50, 50]
      })
      const borderBottomLeft = this.animated.interpolate({
        inputRange,
        outputRange: [0, 5, 5, 5, 5, 5, 5, 5, 5, 100, 100, 100, 100, 100, 75, 50, 50]
      })
      const borderBottomRight = this.animated.interpolate({
        inputRange,
        outputRange: [0, 5, 5, 5, 5, 100, 100, 100, 100, 5, 5, 5, 5, 100, 75, 50, 50]
      })
      const opacity = this.animated.interpolate({
        inputRange: [1, 4],
        outputRange: [0, 1],
      })
      const opactiy1 = this.animated.interpolate({
        inputRange: [5, 8],
        outputRange: [1, 0],
      })
      const opactiy2 = this.animated.interpolate({
        inputRange: [9, 12],
        outputRange: [1, 0],
      })
      const opactiy3 = this.animated.interpolate({
        inputRange: [13, 16],
        outputRange: [1, 0],
      })

      return isSkip ? <WrapperComponent {...this.props} /> : (
        <View style={styles.bgContainer}>
          <View style={styles.floatingImage}>
            <Animated.View style={styles.animationImg1(scale, opacity, borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight)} >
              <Animated.Image source={TEST_BG} style={[styles.imgStack(opactiy1, 4), styles.size(imgSize)]} />
              <Animated.Image source={IMAGE_NOT_FOUND} style={[styles.imgStack(opactiy2, 3), styles.size(imgSize)]} />
              <Animated.Image source={BG_EXAMPLE} style={[styles.imgStack(opactiy3, 2), styles.size(imgSize)]} />
              <Animated.Image source={LOADING_SCREEN} style={[styles.imgStack(opacity, 1), styles.size(imgSize)]} />
            </Animated.View>
          </View>
          <Animated.View style={[styles.flex(1), styles.opacity(opacity)]}>
            <Swiper
              showsButtons={false}
              loop={false}
              onIndexChanged={this.handleTab}
            >
              <View style={styles.flexTab}>
                <View style={styles.height(dimensionHeight)} />
                <Text style={styles.textDefaultBold(24)}>Hello Swiper</Text>
                { storage && <Text>{JSON.stringify(storage, null, '  ')}</Text> }
              </View>
              <View style={styles.flexTab}>
                <View style={styles.height(dimensionHeight)} />
                <Text style={styles.textDefaultBold(24)}>Beautiful</Text>
              </View>
              <View style={styles.flexTab}>
                <View style={styles.height(dimensionHeight)} />
                <Text style={styles.textDefaultBold(24)}>And simple</Text>
              </View>
              <View style={styles.flexTab}>
                <View style={styles.height(dimensionHeight)} />
                <Text style={styles.textDefaultBold(24)}>Login</Text>
                <View style={styles.marginTop(20)} />
                <View style={styles.flexDirection('row')}>
                  <Button 
                    type='default' 
                    color='default' 
                    onPress={() => this.handleSkip()}
                    >
                    Sign Up
                  </Button>
                  <View style={styles.margin(10)} />
                  <Button 
                    type='primary' 
                    color='primary' 
                    onPress={() => this.handleSkip()}
                    >
                    Login
                  </Button>
                </View>
              </View>
            </Swiper>
          </Animated.View>
        </View>
      )
    }
  }

  return HOC
}

export default withIntro
