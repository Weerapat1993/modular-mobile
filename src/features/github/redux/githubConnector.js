import { connect } from 'react-redux'
import { Github } from './githubReducer'

export const withGithub = (
  connect (
    (state) => ({
      github: Github(state),
    }),
    {

    }
  )
)
