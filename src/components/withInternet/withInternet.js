import React, { Component, Fragment } from 'react'
import { Text, Animated } from 'react-native'
import { withConnection, connectionShape } from './withConnection'
import styles from './styles'
import { t } from '../../language'

export const withInternet = (WrapperComponent) => {
  class Connection extends Component {
    static propTypes = {
      connection: connectionShape,
    }
  
    constructor() {
      super()
  
      this.networkBar = new Animated.Value(0)
    }

    runAnimated() {
      this.runAnimatedStart()
      setTimeout(() => {
        this.runAnimatedReturn()
      }, 3000)
    }
  
    runAnimatedStart() {
      Animated.timing(
        this.networkBar,
        {
          toValue: 1,
          duration: 300,
        },
      ).start()
    }
  
    runAnimatedReturn() {
      Animated.timing(
        this.networkBar,
        {
          toValue: 0,
          duration: 300,
        },
      ).start()
    }
  
    componentWillReceiveProps(nextProps) {
      const { connection } = this.props
      if(connection.isConnected !== nextProps.connection.isConnected) {
        this.runAnimated()
      }
    }
  
    render() {
      const { connection } = this.props
      const height = this.networkBar.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 20]
      })
      // const reduceProps = {}
      // Object.keys(this.props).filter(key => key !== 'connection').forEach(key => {
      //   reduceProps[key] = this.props[key] 
      // })
      return (
        <Fragment>
          <WrapperComponent {...this.props} />
          <Animated.View style={styles.connectionBar(height, connection.isConnected)}>
            <Text style={styles.textWhite(12)}>{connection.isConnected ? t('connected') : t('offline')}</Text>
          </Animated.View>
        </Fragment>
      )
    }
  }

  return withConnection(Connection)
} 

export default withInternet

