import React from 'react'
import { TabNavigation, withIntro } from '../../components'
import { withFetchStorage } from '../../features';

const Initial = () => (
  <TabNavigation />
)

export default withFetchStorage(withIntro(Initial))
