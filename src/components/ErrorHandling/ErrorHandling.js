import React, { Component } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import { withConnection, connectionShape } from 'react-native-connection-info'
import { Modal } from 'antd-mobile'
import { bool, string, func, any } from 'prop-types'
import { Loading } from '../Loading'
import { Button } from '../Button'
import styles from './styles'
import { ErrorFlat } from '../../assets/images'

class ErrorHandling extends Component {
  static propTypes = {
    isFetching: bool,
    error: string,
    children: any.isRequired,
    onReload: func,
    connection: connectionShape,
  }

  static defaultProps = {
    isFetching: false,
    error: '',
    onReload: () => null,
  }

  constructor() {
    super()

    this.networkBar = new Animated.Value(0)
  }

  componentDidMount() {
    this.runAnimated()
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
    const { error, connection } = this.props
    if(error !== nextProps.error && nextProps.error) {
      this.handleError(nextProps.error)
    }
    if(connection.isConnected !== nextProps.connection.isConnected) {
      this.runAnimated()
    }
  }

  handleError = (error) => {
    Modal.alert(
      <Text style={styles.textAlert}>Error</Text>,
      error, [
      { text: 'OK', onPress: () => null },
    ]) 
  }

  render() {
    const { isFetching, children, error, onReload, connection } = this.props
    const height = this.networkBar.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 20]
    })
    return (
      <View style={styles.flex(1)}>
        {
          isFetching ? (
            <Loading />
          ) : (
            <View style={styles.flex(1)}>
              { 
                error ? (
                  <View style={styles.container}>
                    <Image source={ErrorFlat} style={styles.size(256)} />
                    <Text style={[styles.textDangerBold(24), styles.marginVertical(20)]}>Oh Snap!</Text>
                    <Text style={styles.textMute(16)}>Something this wrong!</Text>
                    <View style={styles.marginTop(5)} />
                    <Text style={styles.textMute(16)}>Please try again!</Text>
                    <Button 
                      type='outline' 
                      color='primary' 
                      rounded 
                      onPress={onReload} 
                      style={styles.margin(20)}
                    >
                      TRY AGAIN
                    </Button>
                  </View>
                ) : (
                  children
                )
              }
            </View>
          )
        }
        <Animated.View style={styles.connectionBar(height, connection.isConnected)}>
          <Text style={styles.textWhite(12)}>{connection.isConnected ? 'Connected' : 'Offline'}</Text>
        </Animated.View>
      </View>
    )
  }
}

export default withConnection(ErrorHandling)
