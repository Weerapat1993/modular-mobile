import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { getAllLocalStorage, setLocalStorage, getLocalStorage } from './storageActions'
import { Storage } from './storageSelector'

export const withLocalStorage = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      getAllLocalStorage: func.isRequired,
    }

    componentDidMount() {
      this.props.getAllLocalStorage()
    }

    render() {
      return (
        <WrapperComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    storage: Storage(state).get(),
  })

  const mapDispatchToProps = {
    getAllLocalStorage,
    setLocalStorage,
    getLocalStorage,
  }

  return connect(mapStateToProps, mapDispatchToProps)(HOC)
}