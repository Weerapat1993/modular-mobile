import React from 'react'
import { List } from 'antd-mobile'
import { Actions } from 'react-native-router-flux'

const { Item } = List
const { Brief } = Item

const DatabaseContainer = ({ title, database }) => (
  <List renderHeader={() => title}>
    {
      Object.keys(database).map(key => {
        const isObject = typeof database[key] === 'object'
        return (
          <Item
            key={key}
            arrow={isObject ? 'horizontal' : 'vertical'}
            multipleLine
            onClick={() => isObject ? Actions.databaseDetail({ title: `${title} > ${key}`, database: database[key] }) : null}
            platform="android"
          >
            {`${key} ${isObject ? `(${Object.keys(database[key]).length})` : ''}`}
            <Brief>{isObject ? Object.keys(database[key]).map(key => `${key}\n`) : JSON.stringify(database[key])}</Brief>
          </Item>
        )
      })
    }
  </List>
)

export default DatabaseContainer
