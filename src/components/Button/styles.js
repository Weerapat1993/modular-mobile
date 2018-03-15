import _ from 'lodash'
import { GlobalStyle } from '../../styles'

export const Theme = {
  Button: {
    Color: {
      default: '#ffffff',
      primary: '#09d',
      success: '#0A0',
      danger: '#C33',
      warning: '#FC3',
    },
    Text: {
      default: '#333',
      primary: '#09d',
      success: '#0A0',
      danger: '#C33',
      warning: '#FC3',
    }
  }
}

class Style extends GlobalStyle {

  btnView = (type, color, rounded, flat) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'outline' || type === 'flat' ? 'transparent' : _.get(Theme.Button.Color, color, color),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: !flat && _.get(Theme.Button.Text, color, color),
    borderWidth: type === 'outline' ? 1 : 0,
    borderRadius: rounded ? 50 : 0
  })

  btnText = (type, color) => ({
    color: type !== 'primary' || color === 'default' ? _.get(Theme.Button.Text, color, color) : '#fff',
    fontSize: 16
  })
}

export default new Style()

