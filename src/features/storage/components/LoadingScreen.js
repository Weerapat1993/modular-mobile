import React from 'react'
import { Text, ActivityIndicator, ImageBackground } from 'react-native'
import { LOADING_SCREEN } from '../assets/images'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontLoading: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  }
}

const LoadingScreen = () => (
  <ImageBackground 
    source={LOADING_SCREEN}
    style={styles.container}>
    <ActivityIndicator size='large' />
    <Text style={styles.fontLoading}>Loading ...</Text>
  </ImageBackground>
)

export default LoadingScreen
