import React, { Component } from 'react'
import { func, shape, bool, string, arrayOf } from 'prop-types'
import { connect } from 'react-redux'
import { fetchPurchaseList } from '../purchaseActions'
import { PurchaseSelector as Selector } from '../purchaseSelector'
import { ErrorHandling } from '../../../../components'
import { Purchase as Model } from '../../../../models/Purchase'

export const withPurchase = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      // Connect Store
      purchase: shape({
        isFetching: bool,
        isReload: bool,
        error: string,
        data: arrayOf(Model.setPropTypes()),
      }).isRequired,
      fetchPurchaseList: func.isRequired,
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
      this.props.fetchPurchaseList()
    }

    render() {
      const { purchase } = this.props
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

  const mapStateToProps = (state) => ({
    purchase: Selector.getList(state),
  })

  const mapDispatchToProps = {
    fetchPurchaseList,
  }

  return connect(mapStateToProps, mapDispatchToProps)(HOC)
}

export default withPurchase
