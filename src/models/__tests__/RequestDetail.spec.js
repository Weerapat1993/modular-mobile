import { RequestDetail } from '../RequestDetail'
import dataJson from '../mockData/refund.json'

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
    const { data } = dataJson
    const recieved = RequestDetail.set(data)
    const expected = {
      id: data.id,
      currency: data.currency.symbol,
      status: data.status,
      orderId: data.order_id,
      orderNo: data.order_no,
      shopId: data.shop.id,
      shopName: data.shop.name,
      shopLogo: data.shop.logo,
      products: [],
      requestDescrtpion: 'request refund',
      requestImage: 'http://d2tism8vvtnwnw.cloudfront.net/product/87577402-2009-485b-91ce-624154728e71/CCB6F3DC-36D0-48E4-BC47-8057812F7D8D.jpg',
      rejectCoin: 0,
      rejectDescrtpion: '',
      rejectImage: '',
      deductCoin: data.deducted_info.returned_amount,
      userId: data.user_id,
    }
    expect(recieved).toEqual(expected)
  })

  it('RequestDetail.get(data)', () => {
    const recieved = RequestDetail.get(dataTable)
    expect(recieved).toEqual(dataTable)
  })
})
