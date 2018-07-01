import React, { Component } from 'react'
import { func, shape, bool, string, arrayOf } from 'prop-types'
import { connect } from 'react-redux'
import { fetchPurchaseList } from '../purchaseActions'
import { makeGetPurchaseList } from '../purchaseSelector2'
import { fetchGithubByID } from '../../../github/redux/githubActions'
import { PurchaseSelector as Selector } from '../purchaseSelector'
import { ErrorHandling } from '../../../../components'
import { Purchase as Model } from '../../models/Purchase'

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
      // console.warn('render List')
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
    const getPurchaseList = makeGetPurchaseList()
    return (state) => ({
      purchase: getPurchaseList(state),
    })
  }

  // const mapStateToProps = (state) => ({
  //   purchase: Selector.getList(state),
  // })

  const mapDispatchToProps = {
    fetchPurchaseList,
    fetchGithubByID,
  }

  return connect(makeMapStateToProps, mapDispatchToProps)(HOC)
}

export default withPurchase
