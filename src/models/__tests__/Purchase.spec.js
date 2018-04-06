import { Purchase } from '../Purchase'
import dataJson from '../mockData/order.json'
import { Product } from '../Product'

const dataTable = {
  id: '',
  status: '',
  deliveryType: '',
  userId: '',
  currency: '',
  orderNo: '',
  // Shop
  shopId: '',
  shopName: '',
  shopDescription: '',
  shopLogo: '',
  // Customer
  customerId: '',
  customerEmail: '',
  customerName: ' ',
  customerAvatar: '',
  customerUserId: '',
  // Array
  products: [],
  histories: []
}

describe('Purchase Model', () => {
  it('Purchase.set()', () => {
    const recieved = Purchase.set()
    const expected = dataTable
    expect(recieved).toEqual(expected)
  })
  it('Purchase.set(data)', () => {
    const { data } = dataJson
    const { shop, customer } = data
    const recieved = Purchase.set(data)
    const expected = {
      id: data.id,
      status: data.status,
      deliveryType: data.delivery_method.delivery_type,
      userId: data.user_id,
      currency: data.currency.symbol,
      orderNo: data.order_no,
      // Shop
      shopId: shop.id,
      shopName: shop.name,
      shopDescription: shop.description,
      shopLogo: shop.logo,
      // Customer
      customerId: customer.id,
      customerEmail: customer.email,
      customerName: 'Steven Gerrard',
      customerAvatar: customer.url_avatar,
      customerUserId: customer.user_id,
      // Array
      products: data.items.map(item => Product.set(item)),
      histories: data.histories,
    }
    expect(recieved).toEqual(expected)
  })
})