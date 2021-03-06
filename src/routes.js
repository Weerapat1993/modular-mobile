import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Scenes from './scenes'

export const Routes = () => (
  <Router>
    <Stack key="root" hideNavBar >
      <Scene key="initial" component={Scenes.Initial} title='Initial' initial />
      <Scene key="home" component={Scenes.Home} title='Home' />
      <Scene key="about" component={Scenes.About} title='About' />
      <Scene key="githubList" component={Scenes.Github.List} title='Github List' />
      <Scene key="githubForm" component={Scenes.Github.Form} title='Github Form' />
      <Scene key="storage" component={Scenes.Storage} title='Storage' />
      <Scene key="purchaseList" component={Scenes.Purchase.List} title='Purchase' />
      <Scene key="purchaseDetail" component={Scenes.Purchase.Detail} title='Purchase Detail' />
      <Scene key="purchaseForm" component={Scenes.Purchase.Form} title='Purchase' />
      <Scene key="webView" component={Scenes.Web} />
    </Stack>
  </Router>
)