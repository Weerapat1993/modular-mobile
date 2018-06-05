import { Purchase } from '../Purchase'
import { Product } from '../Product'
import { Shop } from '../Shop'
import { Customer } from '../Customer'
import dataJson from '../mockData/order.json'

const dataTable = Purchase.set()

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
      shop: Shop.set(shop),
      customer: Customer.set(customer),
      products: data.items.map(item => Product.set(item)),
      histories: data.histories,
    }
    expect(recieved).toEqual(expected)
  })

  it('Purchase.get(data)', () => {
    const recieved = Purchase.get(dataTable)
    expect(recieved).toEqual(dataTable)
  })

  it('Purchase.get()', () => {
    const recieved = Purchase.get()
    expect(recieved).toEqual(undefined)
  })
})