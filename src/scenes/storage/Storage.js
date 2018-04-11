import React from 'react'
import { Text } from 'react-native'
import { object } from 'prop-types'
import faker from 'faker'
import { Actions } from 'react-native-router-flux'
import { Button, Navbar, IconButton } from '../../components'
import { withLocalStorage } from '../../features/storage'

import { BACK } from '../../assets/images'

const StorageScene = ({ storage, localStorage }) => {
  const productList = () => {
    const uuid = faker.random.uuid()
    return {
      keys: {
        [uuid]: {
          id: uuid,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          boolean: true,
        }
      }
    }
  }
  const github = JSON.stringify([faker.random.uuid()])
  return (
    <Navbar
      title='Purchase'
      leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
      rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
    >
      <Button 
        type='primary' 
        color='primary' 
        rounded 
        onPress={() => localStorage.setItem('productList', JSON.stringify(productList()))}
        >
        SET PRODUCT
      </Button>
      <Button 
        type='primary' 
        color='success' 
        rounded 
        onPress={() => localStorage.setItem('socialList', faker.name.findName())}
        >
        SET SOCIAL
      </Button>
      <Button 
        type='primary' 
        color='#333' 
        rounded
        onPress={() => localStorage.setItem('github', github)}
        >
        SET GITHUB
      </Button>
      <Button 
        type='primary' 
        color='default' 
        rounded
        onPress={() => localStorage.clear()}
        >
        CLEAR STORAGE
      </Button>
      <Text>{JSON.stringify(storage, null, '  ')}</Text>
    </Navbar>
  )
}

StorageScene.propTypes = {
  storage: object.isRequired,
  localStorage: object.isRequired,
}

export default withLocalStorage(StorageScene)
