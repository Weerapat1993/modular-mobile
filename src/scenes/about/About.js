import React, { Component } from 'react'
import { func } from 'prop-types'
import { ScrollView, Text } from 'react-native'
import { List, InputItem, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { fetchGithubByID } from '../../features/github/redux/githubActions'
import { PurchaseSelector as Selector } from '../../features'
import { Button } from '../../components'
import { styles } from '../../styles'
import { Optimizer } from '../../utils'

class About extends Component {
  static propTypes = {
    fetchGithubByID: func.isRequired,
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
    if (Optimizer.isShouldRender(this.props, nextProps, this.state, nextState)) return false
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
    const { boxSwitch } = this.state
    alert('Render')
    return (
      <ScrollView>
        <Button 
          type='primary' 
          color='default' 
          rounded 
          style={styles.marginVertical(10)} 
          onPress={() => this.props.fetchGithubByID('Weerapat1993')}>
          Fetch Github By ID
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

const mapDispatchToProps = {
  fetchGithubByID
}

export default connect(mapStateToProps, mapDispatchToProps)(createForm()(About))
