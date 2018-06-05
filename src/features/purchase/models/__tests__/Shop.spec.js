import { Shop } from '../Shop'

const dataTable = Shop.set()

describe('Shop Model', () => {
  it('Shop.set()', () => {
    const recieved = Shop.set()
    const expected = dataTable
    expect(recieved).toEqual(expected)
  })
  it('Shop.set(data)', () => {
    const shop = {
      id: 'shop:1234',
      name: 'Shop Name',
      description: 'Shop Description',
      logo: '',
    }
    const recieved = Shop.set(shop)
    const expected = {
      shopId: shop.id,
      shopName: shop.name,
      shopDescription: shop.description,
      shopLogo: shop.logo,
    }
    expect(recieved).toEqual(expected)
  })

  it('Shop.get(data)', () => {
    const data = dataTable
    const recieved = Shop.get(data)
    expect(recieved).toEqual(data)
  })
})
