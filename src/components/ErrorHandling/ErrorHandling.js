import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Modal } from 'antd-mobile'
import { bool, string, func, any } from 'prop-types'
import { Loading } from '../Loading'
import { Button } from '../Button'
import styles from './styles'
import { ErrorFlat } from '../../assets/images'
import { withInternet } from '../withInternet';

class ErrorHandling extends Component {
  static propTypes = {
    isFetching: bool,
    error: string,
    children: any.isRequired,
    onReload: func,
  }

  static defaultProps = {
    isFetching: false,
    error: '',
    onReload: () => null,
    isShowError: true
  }

  componentWillReceiveProps(nextProps) {
    const { error } = this.props
    if(error !== nextProps.error && nextProps.error) {
      this.handleError(nextProps.error)
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
    const { isFetching, children, error, onReload } = this.props
    return (
      <View style={styles.flex(1)}>
        {
          isFetching ? (
            <Loading />
          ) : (
            <View style={styles.flex(1)}>
              { 
                error && !isFetching ? (
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
      </View>
    )
  }
}

export default withInternet(ErrorHandling)
