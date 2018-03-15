import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'antd-mobile'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size='large' />
  </View>
)

export default Loading
