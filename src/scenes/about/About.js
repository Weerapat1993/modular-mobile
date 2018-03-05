import React from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from 'antd-mobile'

const About = () => (
  <View>
    <Text>About</Text>
    <Button onClick={() => Actions.pop()} >Back to home</Button>
  </View>
)

export default About
