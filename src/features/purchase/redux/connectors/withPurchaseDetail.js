import React, { Component } from 'react'
import { func, shape, bool, string } from 'prop-types'
import { connect } from 'react-redux'
import { fetchPurchaseDetail } from '../purchaseActions'
import { makeGetPurchaseByID } from '../purchaseSelector2'
// import { PurchaseSelector as Selector } from '../purchaseSelector'
import { ErrorHandling } from '../../../../components'
import { Purchase as Model } from '../../models/Purchase'

export const withPurchaseDetail = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      purchaseID: string,
      // Connect Store
      purchase: shape({
        isFetching: bool,
        isReload: bool,
        error: string,
        data: Model.setPropTypes(),
      }).isRequired,
      fetchPurchaseDetail: func.isRequired,
    }

    constructor() {
      super()

      this.handleReload = this.handleReload.bind(this)
    }

    componentDidMount() {
      const { purchase } = this.props
      if(purchase.isReload) {
        this.handleReload()
      }
    }

    handleReload() {
      const { purchaseID } = this.props
      this.props.fetchPurchaseDetail(purchaseID)
    }

    render() {
      const { purchase } = this.props
      // console.warn('render detail')
      return (
        <ErrorHandling
          isFetching={purchase.isFetching}
          error={purchase.error}
          onReload={this.handleReload}
        >
           <WrapperComponent {...this.props} />
        </ErrorHandling>
      )
    }
  }

  const makeMapStateToProps = () => {
    const getPurchaseByID = makeGetPurchaseByID()
    return (state, { purchaseID }) => ({
      purchase: getPurchaseByID(state, purchaseID),
    })
  }

  // const mapStateToProps = (state, { purchaseID }) => ({
  //   purchase: Selector.getByID(state, purchaseID),
  // })

  const mapDispatchToProps = {
    fetchPurchaseDetail,
  }

  return connect(makeMapStateToProps, mapDispatchToProps)(HOC)
}

export default withPurchaseDetail
