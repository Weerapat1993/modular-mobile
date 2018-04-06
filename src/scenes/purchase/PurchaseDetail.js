import React from 'react'
import { string } from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { PurchaseDetailContainer } from '../../features'
import { Navbar, IconButton } from '../../components'
import { BACK } from '../../assets/images'

const PurchaseDetail = (props) => (
  <Navbar
    title='Purchase Detail'
    leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
  >
    <PurchaseDetailContainer
      {...props}
      purchaseID={props.purchaseID}
    />
  </Navbar>
)

PurchaseDetail.propTypes = {
  purchaseID: string.isRequired,
}

export default PurchaseDetail
