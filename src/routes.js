import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Scenes from './scenes'

export const Routes = () => (
  <Router>
    <Stack key="root" hideNavBar >
      <Scene key="initial" component={Scenes.Initial} title='Initial' initial />
      <Scene key="home" component={Scenes.Home} title='Home' />
      <Scene key="about" component={Scenes.About} title='About' />
      <Scene key="github" component={Scenes.Github} title='Github' />
      <Scene key="storage" component={Scenes.Storage} title='Storage' />
      <Scene key="purchase" component={Scenes.Purchase} title='Purchase' />
      <Scene key="purchaseCreate" component={Scenes.PurchaseCreate} title='Purchase' />
      <Scene key="purchaseDetail" component={Scenes.PurchaseDetail} title='Purchase Detail' />
      <Scene key="database" component={Scenes.Database} title='Database' />
      <Scene key="databaseDetail" component={Scenes.DatabaseDetail} title='Database' />
    </Stack>
  </Router>
)