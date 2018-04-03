import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Scenes from './scenes'

export const Routes = () => (
  <Router>
    <Stack key="root" >
      <Scene key="initial" component={Scenes.Initial} title='Initial' initial />
      <Scene key="home" component={Scenes.Home} title='Home' />
      <Scene key="about" component={Scenes.About} title='About' />
      <Scene key="github" component={Scenes.Github} title='Github' />
      <Scene key="storage" component={Scenes.Storage} title='Storage' />
    </Stack>
  </Router>
)