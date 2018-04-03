import { connect } from 'react-redux'
import { Purchase } from './purchaseSelector'

export const withPurchase = (
  connect (
    (state, ownProps) => ({
      purchase: Purchase.getByID(state),
    }),
    {

    }
  )
)

export default withPurchase
