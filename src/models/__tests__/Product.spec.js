import { Product } from '../Product'

const dataTable = Product.set()

describe('Product Model', () => {
  it('Product.set()', () => {
    const recieved = Product.set()
    const expected = dataTable
    expect(recieved).toEqual(expected)
  })
  it('Product.set(data)', () => {
    const product = {
      product_id: 'product:1234',
      title: 'Product Name',
      description: 'Product Descrption',
      shop_id: 'shop:1234',
      quantity: 10,
      point_back: 1,
      point: 100,
      delivery_method: 'meetup',
      delivery_methods: [],
      images: [
        {
          url: '',
        }
      ]
    }
    const recieved = Product.set(product)
    const expected = {
      productId: product.product_id,
      productImage: product.images[0].url,
      title: product.title,
      description: product.description,
      shopId: product.shop_id,
      quantity: 10,
      pointBack: 1,
      rewardPointPercent: 100,
      deliveryMethod: product.delivery_method,
      deliveryMethods: []
    }
    expect(recieved).toEqual(expected)
  })

  it('Product.get(data)', () => {
    const data = dataTable
    const recieved = Product.get(data)
    expect(recieved).toEqual(data)
  })
})
