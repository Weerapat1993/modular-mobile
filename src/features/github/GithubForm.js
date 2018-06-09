import React, { Component } from 'react'
import { Text, TouchableHighlight, KeyboardAvoidingView, ScrollView, RefreshControl } from 'react-native'
import { func, string, shape, bool, arrayOf, object } from 'prop-types'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import t from 'tcomb-form-native'
import Case from 'case'
import _ from 'lodash'
import { createGithubRepository } from './redux/githubActions'
import { GithubSelector as Selector } from './redux'
import { Optimizer } from '../../utils'
import styles from './components/styles'
import { Loading } from '../../components'

const Form = t.form.Form;

// here we are: define your domain model
const Person = t.struct({
  name: t.String,              // a required string
  description: t.maybe(t.String),  // an optional string
  public: t.Boolean        // a boolean
})

const options = {
  fields: {
    name: {
      label: `Repository name`,
      help: 'Great repository names are short and memorable. Need inspiration? How about special-barnacle.',
      error: 'Insert a valid name',
    },
    description: {
      label: `Description`,
    },
    public: {
      label: 'Public',
    },
  }
};

class GithubForm extends Component {
  static propTypes = {
    userID: string.isRequired,
    createGithubRepository: func.isRequired,
    github: shape({
      isFetching: bool,
      isReload: bool,
      error: string,
      data: arrayOf(object)
    })
  }

  constructor() {
    super()

    this.state = {
      value: null,
    }

    this.handleSumbit = this.handleSumbit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  clearForm() {
    // clear content from all textbox
    this.setState({ value: null });
  }

  componentDidUpdate(prevProps, prevState) {
    const { github } = this.props
    if(prevProps.github.data.length !== github.data.length && prevProps.github.data.length < github.data.length) {
      Actions.pop()
    }
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleSumbit() {
    const { userID } = this.props
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      const dataUpdate = {
        ...value,
        id: _.random(1000000, 9999999),
        avatar: '',
        url: `https://github.com/${userID}/${Case.kebab(value.name)}`
      }
      this.props.createGithubRepository(dataUpdate, userID)
      // alert(JSON.stringify(value))
      // console.log(value); // value here is an instance of Person
      // clear all fields after submit
      this.clearForm();
    }
  }

  render() {
    const { github } = this.props
    return (
      <ScrollView 
        refreshControl={
          <RefreshControl
            enabled={false}
            title='Loading ...'
            refreshing={github.isFetching}
          />
        }
      >
        <KeyboardAvoidingView style={styles.container}>
          {/* display */}
          <Form
            ref="form"
            type={Person}
            options={options}
            // onChange={this.handleChange}
          />
          <TouchableHighlight style={styles.button} onPress={this.handleSumbit} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Create repository</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, { userID }) => ({
  github: Selector.getByID(state, userID)
})

const mapDispatchToProps = {
  createGithubRepository
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubForm)
