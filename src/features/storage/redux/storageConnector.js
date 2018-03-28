import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { shape, func, bool } from 'prop-types'
import { connect } from 'react-redux'
import { localStorage } from './storageActions'
import { Storage } from './storageSelector'
import { ErrorHandling } from '../../../components';

export const withLocalStorage = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      isReload: bool.isRequired,
      localStorage: shape({ getAllKeys: func }).isRequired
    }

    componentDidMount() {
      this.props.localStorage.getAllKeys()
    }

    render() {
      const { isReload } = this.props
      return (
        <ErrorHandling isFetching={isReload} error=''>
          <WrapperComponent {...this.props} />
        </ErrorHandling>
      )
    }
  }

  const mapStateToProps = state => ({
    isReload: Storage(state).data().isReload,
    storage: Storage(state).getItem(),
  })

  const mapDispatchToProps = dispatch => ({
    localStorage: bindActionCreators(localStorage, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(HOC)
}