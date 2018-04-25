import React, { Component } from 'react'
import { oneOfType, array, object, string } from 'prop-types'
import { FlatList } from 'react-native'
import { List } from 'antd-mobile'
import { Actions } from 'react-native-router-flux'

const { Item } = List
const { Brief } = Item

class DatabaseContainer extends Component {
  static propTypes = {
    database: oneOfType([object, array]).isRequired,
    title: string.isRequired,
  }

  constructor() {
    super()

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem({ item }) {
    const { database, title } = this.props
    const key = item
    const isObject = typeof database[key] === 'object'
    return (
      <Item
        arrow={isObject ? 'horizontal' : 'vertical'}
        multipleLine
        onClick={() => isObject ? Actions.databaseDetail({ title: `${title} > ${key}`, database: database[key] }) : null}
        platform="android"
      >
        {`${key} ${isObject ? `(${Object.keys(database[key]).length})` : ''}`}
        <Brief>{isObject ? Object.keys(database[key]).map(key => `${key}\n`) : JSON.stringify(database[key])}</Brief>
      </Item>
    )
  }

  render() {
    const { title, database } = this.props
    const dataArray = Object.keys(database)
    return (
      <List renderHeader={() => title}>
        <FlatList
          data={dataArray}
          renderItem={this.renderItem}
          keyExtractor={(item) => item}
        />
      </List>
    )
  }
}

export default DatabaseContainer
