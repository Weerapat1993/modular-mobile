import { Customer } from '../Customer'

const dataTable = Customer.set()

describe('Customer Model', () => {
  it('Customer.set()', () => {
    const recieved = Customer.set()
    const expected = dataTable
    expect(recieved).toEqual(expected)
  })
  it('Customer.set(data)', () => {
    const data = {
      id: 'customer:1234',
      email: 'a@a.com',
      first_name: 'Weerapat',
      middle_name: 'Top',
      last_name: 'Thawatchoketawee',
      user_id: 'user:1234',
      url_avatar: '',
    }
    const recieved = Customer.set(data)
    const expected = {
      customerId: 'customer:1234',
      customerName: 'Weerapat Top Thawatchoketawee',
      customerEmail: 'a@a.com',
      customerUserId: 'user:1234',
      customerAvatar: '',
    }
    expect(recieved).toEqual(expected)
  })

  it('Customer.get(data)', () => {
    const data = dataTable
    const recieved = Customer.get(data)
    expect(recieved).toEqual(data)
  })
})
