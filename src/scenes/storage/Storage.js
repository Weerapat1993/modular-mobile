import React from 'react'
import { Text, View } from 'react-native'
import faker from 'faker'
import { Button } from '../../components'
import { withLocalStorage } from '../../features/storage'

const StorageScene = ({ storage, setLocalStorage }) => {
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

  const github = JSON.stringify(['Test'])
  console.log(storage)
  return (
    <View>
      <Button 
        type='primary' 
        color='primary' 
        rounded 
        onPress={() => setLocalStorage('productList', JSON.stringify(productList()))}
        >
        SET PRODUCT
      </Button>
      <Button 
        type='primary' 
        color='success' 
        rounded 
        onPress={() => setLocalStorage('socialList', faker.name.findName())}
        >
        SET SOCIAL
      </Button>
      <Button 
        type='primary' 
        color='#333' 
        rounded
        onPress={() => setLocalStorage('github', github)}
        >
        SET GITHUB
      </Button>
      <Text>{JSON.stringify(storage, null, '  ')}</Text>
    </View>
  )
}

export default withLocalStorage(StorageScene)
