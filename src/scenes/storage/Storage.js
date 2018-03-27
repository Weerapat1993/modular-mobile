import React from 'react'
import { Text, View } from 'react-native'
import faker from 'faker'
import { Button } from '../../components'
import { withLocalStorage } from '../../features/storage'

const StorageScene = ({ storage, localStorage }) => {
  const productList = () => {
    const uuid = faker.random.uuid()
    return {
      keys: {
        [uuid]: {
          id: uuid,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
        }
      }
    }
  }
  const github = JSON.stringify([faker.random.uuid()])
  return (
    <View>
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
      <Text>{JSON.stringify(storage, null, '  ')}</Text>
    </View>
  )
}

export default withLocalStorage(StorageScene)
