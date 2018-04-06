import React, { Component } from 'react'
import { func, shape, bool, string, object, arrayOf } from 'prop-types'
import { connect } from 'react-redux'
import { fetchGithubByID } from './githubActions'
import { GithubSelector as Selector } from './githubSelector'
import { ErrorHandling } from '../../../components'

export const withGithub = (WrapperComponent) => {
  class HOC extends Component {
    static propTypes = {
      // props data
      userID: string.isRequired,
      // Connect Store
      github: shape({
        isFetching: bool,
        isReload: bool,
        error: string,
        data: arrayOf(object),
      }).isRequired,
      fetchGithubByID: func.isRequired,
    }

    constructor() {
      super()

      this.handleReload = this.handleReload.bind(this)
    }

    componentDidMount() {
      const { github } = this.props
      if(github.isReload) {
        this.handleReload()
      }
    }

    handleReload() {
      const { userID } = this.props
      this.props.fetchGithubByID(userID)
    }

    render() {
      const { github } = this.props
      return (
        <ErrorHandling
          isFetching={false}
          error={github.error}
          onReload={this.handleReload}
        >
           <WrapperComponent {...this.props} />
        </ErrorHandling>
      )
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    github: Selector.getByID(state, ownProps.userID),
  })

  const mapDispatchToProps = {
    fetchGithubByID
  }

  return connect(mapStateToProps, mapDispatchToProps)(HOC)
}

export default withGithub
