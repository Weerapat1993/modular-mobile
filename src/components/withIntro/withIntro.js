import React, { Component, Fragment } from 'react'
import { View, Animated, Easing } from 'react-native'
import { object } from 'prop-types'
import Swiper from 'react-native-swiper'
import { Button } from '../../components'
import { BG_EXAMPLE, IMAGE_NOT_FOUND, LOADING_SCREEN, TEST_BG } from '../../assets/images'
import styles from './components/styles'
import { Dot, DotActive, SwiperTab } from './components'

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
      Animated.timing(this.animated).stop()
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
      this.setState({ currentTab: tab })
      this.runAnimation(tab)
    }

    handleSkip() {
      this.setState({ isSkip: true })
      this.props.localStorage.setItem('intro', JSON.stringify(true))
    }

    checkSkipIntro() {
      const { storage } = this.props
      return storage.intro
    }

    render() {
      const { isSkip } = this.state
      const imgSize = 250
      const lineNum = 16
      const inputRange = []
      const outputScale = [0, 300, 285]
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

      return isSkip || this.checkSkipIntro() ? <WrapperComponent {...this.props} /> : (
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
              dot={<Dot />}
              activeDot={<DotActive />}
              activeDotColor={styles.bgDefault.backgroundColor}
            >
              <Fragment>
                <SwiperTab 
                  title={'LQID - the social marketplaces'}
                  description={'LQID is social - you can shere shops and products you like on your own timeline or to your other social media.'}
                />
              </Fragment>
              <Fragment>
                <SwiperTab 
                  title={'Buy and sell on LQID'}
                  description={`LQID gives you a secure money account right in the app. It makes paying and getting paid smoother.`}
                />
              </Fragment>
              <Fragment>
                <SwiperTab 
                  title='Make shopping rewarding'
                  description='LQID Coins are collected every time you buy - save your Coins to use as cash on LQID.'
                />
              </Fragment>
              <Fragment>
                <SwiperTab 
                  title={'LQID community'}
                  description={`We're really pleased to see you have but before we get going we need to get a few details.`}
                >
                  <View style={styles.flexDirection('row')}>
                    <Button 
                      type='outline' 
                      color='primary' 
                      size='large'
                      rounded
                      onPress={() => this.handleSkip()}
                      >
                      Login
                    </Button>
                    <View style={styles.margin(10)} />
                    <Button 
                      type='primary' 
                      color='primary'
                      size='large'
                      rounded
                      onPress={() => this.handleSkip()}
                      >
                      Sign Up
                    </Button>
                  </View>
                </SwiperTab>
              </Fragment>
            </Swiper>
            <View style={[styles.center, styles.marginVertical(20)]}>
              <Button 
                type='flat' 
                color='primary'
                rounded
                onPress={() => this.handleSkip()}
              >
                Skip
              </Button>
            </View>
          </Animated.View>
        </View>
      )
    }
  }

  return HOC
}

export default withIntro
