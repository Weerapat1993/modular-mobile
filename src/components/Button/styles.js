import _ from 'lodash'
import { GlobalStyle } from '../../styles'
import { Theme } from '../../config/theme'

class Style extends GlobalStyle {

  btnView = (type, color, rounded) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'outline' || type === 'flat' ? 'transparent' : _.get(Theme.Button.Color, color.toUpperCase(), color),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: _.get(Theme.Button.Text, color, color),
    borderWidth: type === 'outline' ? 1 : 0,
    borderRadius: rounded ? 50 : 0
  })

  btnText = (type, color, textColor) => ({
    color: type !== 'primary' || color === 'default' ? _.get(Theme.Button.Text, color.toUpperCase(), textColor || color) : textColor || '#fff',
    fontSize: 16
  })
}

export default new Style()

