import React, { Component } from 'react'
import { object } from 'prop-types'
import { ScrollView, Text } from 'react-native'
import { List, InputItem, Toast } from 'antd-mobile'
import { createForm } from 'rc-form';
import { bindActionCreators } from 'redux'
import { localStorage } from '../../features/storage/redux/storageActions'
import { PurchaseSelector as Selector } from '../../features'
import { connect } from 'react-redux'
import faker from 'faker/locale/en'
import { Button } from '../../components'
import { styles } from '../../styles'
import { Performances } from '../../utils/Performances'

class About extends Component {
  static propTypes = {
    localStorage: object.isRequired,
  }

  constructor() {
    super()

    this.state = {
      boxSwitch: false,
      hasError: false,
      value: '',
    }

    this.handleErrorClick = this.handleErrorClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const checkProps = Performances.isShouldRenderProps(this.props, nextProps)
    const checkState = Performances.isShouldRenderState(this.state, nextState)
    if(checkProps && checkState) return false
    return true
  }

  handleErrorClick() {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  handleChange(value) {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }

  render() {
    const { localStorage } = this.props
    const { boxSwitch } = this.state
    alert('Render')
    return (
      <ScrollView>
        <Button 
          type='primary' 
          color='default' 
          rounded 
          style={styles.marginVertical(10)} 
          onPress={() => localStorage.setItem('socialList', faker.name.findName())}>
          Render Props
        </Button>
        <Button 
          type='primary' 
          color='default' 
          rounded 
          style={styles.marginVertical(10)} 
          onPress={() => this.setState({ boxSwitch: false })}>
          Render State = false
        </Button>
        <Button 
          type='primary' 
          color='default' 
          rounded 
          style={styles.marginVertical(10)} 
          onPress={() => this.setState({ boxSwitch: !boxSwitch })}>
          Switch State
        </Button>
        <Text>Switch: {JSON.stringify(boxSwitch)}</Text>
        <List>
          <InputItem
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.handleErrorClick}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </List>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  purchase: Selector.getList(state),
})

const mapDispatchToProps = dispatch => ({
  localStorage: bindActionCreators(localStorage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(createForm()(About))
