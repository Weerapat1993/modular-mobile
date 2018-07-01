import React, { Component } from 'react'
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import t from 'tcomb-form-native'
import styles from './components/styles'
import { Optimizer } from '../../utils'

const Form = t.form.Form;

// here we are: define your domain model
const Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  phone: t.String,
  rememberMe: t.Boolean        // a boolean
});

const options = {
  fields: {
    name: {
      label: 'Insert your name',
      placeholder: `What's your name?`,
      help: 'Your help message here',
      error: 'Insert a valid name',
      keyboardAppearance: 'dark',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
    surname: {
      label: 'Insert your surname',
      placeholder: `Surname`,
      error: 'Insert a valid surname',
      keyboardAppearance: 'dark',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
    age: {
      placeholder: `e.g. 18`,
      keyboardType: 'number-pad',
      keyboardAppearance: 'dark',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
    phone: {
      placeholder: `08XXXXXXXX`,
      keyboardType: 'numbers-and-punctuation',
      keyboardAppearance: 'dark',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    }
  }
};

class PurchaseForm extends Component {
  static propTypes = {

  }

  constructor() {
    super()

    this.state = {
      value: null,
    }

    this.handleSumbit = this.handleSumbit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (Optimizer.isShouldRender(this.props, nextProps, this.state, nextState)) return false
    return true
  }

  clearForm() {
    // clear content from all textbox
    this.setState({ value: null });
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleSumbit() {
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      alert(JSON.stringify(value))
      console.log(value); // value here is an instance of Person
      // clear all fields after submit
      this.clearForm();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <View style={styles.flex(1)} />
        {/* display */}
        <Form
          ref="form"
          type={Person}
          options={options}
          // onChange={this.handleChange}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSumbit} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <View style={styles.flex(1)} />
      </KeyboardAvoidingView>
    )
  }
}

export default PurchaseForm
