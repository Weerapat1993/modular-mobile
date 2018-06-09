import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { shape, func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { localStorage } from './storageActions'
import { Storage } from './storageSelector'
import { LoadingScreen } from '../components'

// Get Local Storage 
export const withLocalStorage = connect(
  state => ({
    storage: Storage(state).getItem(),
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
      setTimeout(() => {
        this.props.localStorage.getAllKeys()
      }, 2000)
    }

    render() {
      const { isLoad } = this.props
      return (
        isLoad ? <LoadingScreen isLoad={isLoad} /> : <WrapperComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => ({
    isLoad: Storage(state).data().isReload,
    storage: Storage(state).getItem(),
  })

  const mapDispatchToProps = dispatch => ({
    localStorage: bindActionCreators(localStorage, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(HOC)
}