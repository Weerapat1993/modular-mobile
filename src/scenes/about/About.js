import React, { Component } from 'react'
import { object } from 'prop-types'
import { ScrollView } from 'react-native'
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

  shouldComponentUpdate(nextProps, nextState) {
    if(Performances.isShouldRenderProps(this.props, nextProps)) return false
    if(Performances.isShouldRenderState(this.state, nextState)) return false
    return true
  }

  render() {
    const { localStorage } = this.props
    alert('Render')
    return (
      <ScrollView>
        <Button 
          type='primary' 
          color='default' 
          rounded 
          style={styles.marginVertical(10)} 
          onPress={() => localStorage.setItem('socialList', faker.name.findName())}>
          Render
        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
