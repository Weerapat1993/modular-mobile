import React from 'react'
import { ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button } from '../../components'
import { GlobalStyle } from '../../styles'

const styles = new GlobalStyle()

const About = () => (
  <ScrollView>
    <Button type='primary' color='default' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>DEFAULT</Button>
    <Button type='primary' color='primary' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>PRIMARY</Button>
    <Button type='primary' color='warning' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>WARNING</Button>
    <Button type='primary' color='success' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>SUCCESS</Button>
    <Button type='primary' color='danger' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>DANGER</Button>    
    <Button type='outline' color='default' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>DEFAULT</Button>
    <Button type='outline' color='primary' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>PRIMARY</Button>
    <Button type='outline' color='warning' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>WARNING</Button>
    <Button type='outline' color='success' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>SUCCESS</Button>
    <Button type='outline' color='danger' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>DANGER</Button>
    <Button type='flat' color='default' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>DEFAULT</Button>
    <Button type='flat' color='primary' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>PRIMARY</Button>
    <Button type='flat' color='warning' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>WARNING</Button>
    <Button type='flat' color='success' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>SUCCESS</Button>
    <Button type='flat' color='danger' rounded style={styles.marginVertical(10)} onPress={Actions.pop}>DANGER</Button> 
  </ScrollView>
)

export default About
