import React from 'react'
import { Text, ActivityIndicator, View } from 'react-native'
import { t } from '../../../language';

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
  <View style={styles.container}>
    <ActivityIndicator size='large' />
    <Text style={styles.fontLoading}>{t('loading')}</Text>
  </View>
)

export default LoadingScreen
