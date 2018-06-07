import React from 'react'
import { Actions } from 'react-native-router-flux'
import { PurchaseForm } from '../../features'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'

const PurchaseCreate = (props) => (
  <Navbar
    title='Purchase'
    leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
  >
    <PurchaseForm {...props} />
  </Navbar>
)

export default PurchaseCreate
