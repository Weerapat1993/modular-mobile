import { RequestDetail } from '../RequestDetail'

const dataTable = {
  id: '',
  currency: '$',
  status: 'Pending',
  orderId: '',
  orderNo: '',
  shopId: '',
  shopName: '',
  shopLogo: '',
  products: [],
  requestDescrtpion: '',
  requestImage: '',
  rejectCoin: 0,
  rejectDescrtpion: '',
  rejectImage: '',
  deductCoin: 0,
  userId: ''
}

describe('RequestDetail Model', () => {
  it('RequestDetail.set()', () => {
    const recieved = RequestDetail.set()
    const expected = dataTable
    expect(recieved).toEqual(expected)
  })
  it('RequestDetail.set(data)', () => {
    const data = {
      id: '',
      currency: {
        symbol: '$'
      },
      status: 'Pending',
      order_id: '',
      order_no: '',
      shop: {
        id: '',
        name: '',
        logo: '',
      },
      items: [],
      requested_info: {
        description: '',
        images: [],
      },
      rejected_info: {
        description: '',
        images: [],
        returned_amount: 0
      },
      deducted_info: {
        returned_amount: 0
      },
      user_id: ''
    }
    const recieved = RequestDetail.set(data)
    const expected = dataTable
    expect(recieved).toEqual(expected)
  })

  it('RequestDetail.get(data)', () => {
    const recieved = RequestDetail.get(dataTable)
    expect(recieved).toEqual(dataTable)
  })
})
