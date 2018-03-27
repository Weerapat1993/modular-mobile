import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { shape, func } from 'prop-types'
import { connect } from 'react-redux'
import { localStorage } from './storageActions'
import { Storage } from './storageSelector'

export const withLocalStorage = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      localStorage: shape({ getAllKeys: func }).isRequired
    }

    componentDidMount() {
      this.props.localStorage.getAllKeys()
    }

    render() {
      return (
        <WrapperComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => ({
    storage: Storage(state).get(),
  })

  const mapDispatchToProps = dispatch => ({
    localStorage: bindActionCreators(localStorage, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(HOC)
}