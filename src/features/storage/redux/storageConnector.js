import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { shape, func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { localStorage } from './storageActions'
import { Storage } from './storageSelector'
import { makeGetItem, makeGetStorage } from './storageSelector2'
import { LoadingScreen } from '../components'

// Get Local Storage 
export const withLocalStorage = connect(
  state => ({
    storage: Storage.getItem(state),
  }),
  dispatch => ({
    localStorage: bindActionCreators(localStorage, dispatch)
  })
)

// Fetch Local Storage
export const withFetchStorage = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      isLoad: bool.isRequired,
      localStorage: shape({ getAllKeys: func }).isRequired
    }

    componentDidMount() {
      this.props.localStorage.getAllKeys()
    }

    render() {
      const { isLoad } = this.props
      return (
        isLoad ? <LoadingScreen isLoad={isLoad} /> : <WrapperComponent {...this.props} />
      )
    }
  }

  const makeMapStateToProps = () => {
    const getStorageKeyItem = makeGetItem()
    const getStorage = makeGetStorage()
    return (state) => ({
      isLoad: getStorage(state).isReload,
      storage: getStorageKeyItem(state),
    })
  }

  // const mapStateToProps = state => ({
  //   isLoad: Storage.data(state).isReload,
  //   storage: Storage.getItem(state),
  // })

  const mapDispatchToProps = dispatch => ({
    localStorage: bindActionCreators(localStorage, dispatch)
  })

  return connect(makeMapStateToProps, mapDispatchToProps)(HOC)
}