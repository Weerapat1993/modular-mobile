import React, { Component, PureComponent } from 'react'
import { func } from 'prop-types'
import { ScrollView, Text } from 'react-native'
import { List, InputItem, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import shallowCompare from 'react-addons-shallow-compare'; 
import { fetchGithubByID } from '../../features/github/redux/githubActions'
// import { PurchaseSelector as Selector } from '../../features'
import { makeGetPurchaseList } from '../../features/purchase/redux/purchaseSelector2'
import { Button } from '../../components'
import { styles } from '../../styles'

class About extends PureComponent {
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  // }

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
    console.warn('render')
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

const makeMapStateToProps = () => {
  const getPurchaseList = makeGetPurchaseList()
  return (state) => ({
    purchase: getPurchaseList(state),
  })
}

// const mapStateToProps = (state, ownProps) => ({
//   purchase: Selector.getList(state),
// })

const mapDispatchToProps = {
  fetchGithubByID
}

export default connect(makeMapStateToProps, mapDispatchToProps)(createForm()(About))
