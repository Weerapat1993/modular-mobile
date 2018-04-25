import React from 'react'
import { List } from 'antd-mobile'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

const { Item } = List
const { Brief } = Item

const DatabaseContainer = ({ database }) => (
  <List renderHeader={() => 'Database'}>
    {
      Object.keys(database).map(key => (
        <Item
          key={key}
          arrow="horizontal"
          multipleLine
          onClick={() => Actions.databaseDetail({ title: key, database: database[key] })}
          platform="android"
        >
          {`${key} (${Object.keys(database[key]).length})`}
          <Brief>{Object.keys(database[key]).map(key => `${key}\n`)}</Brief>
        </Item>
      ))
    }
  </List>
)

const mapStateToProps = (state, ownProps) => ({
  database: state
})

export default connect(mapStateToProps)(DatabaseContainer)
