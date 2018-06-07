import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import t from 'tcomb-form-native'
import styles from './components/styles'

const Form = t.form.Form;

// here we are: define your domain model
const Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  rememberMe: t.Boolean        // a boolean
});

const options = {
  fields: {
    name: {
      label: 'Insert your name',
      placeholder: `What's your name?`,
      help: 'Your help message here',
      error: 'Insert a valid name'
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
      <View style={styles.container}>
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
      </View>
    )
  }
}

export default PurchaseForm
