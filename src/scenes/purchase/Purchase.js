import React from 'react'
import { Actions } from 'react-native-router-flux'
import { PurchaseContainer } from '../../features'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'
import { t } from '../../language'

const Purchase = (props) => (
  <Navbar
    title={t('purchase')}
    leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
  >
    <PurchaseContainer {...props} />
  </Navbar>
)

export default Purchase
