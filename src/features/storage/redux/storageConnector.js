import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { shape, func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { localStorage } from './storageActions'
import { Storage } from './storageSelector'
import { Loading } from '../../../components'

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
      this.props.localStorage.getAllKeys()
    }

    render() {
      const { isLoad } = this.props
      return (
        isLoad ? <Loading /> : <WrapperComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => ({
    isLoad: Storage(state).data().isReload,
  })

  const mapDispatchToProps = dispatch => ({
    localStorage: bindActionCreators(localStorage, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(HOC)
}