import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Scenes from './scenes'

export const Routes = () => (
  <Router>
    <Stack key="root" >
      <Scene key="home" component={Scenes.Home} title='Home' initial />
      <Scene key="about" component={Scenes.About} title='About' />
      <Scene key="github" component={Scenes.Github} title='Github' />
    </Stack>
  </Router>
)